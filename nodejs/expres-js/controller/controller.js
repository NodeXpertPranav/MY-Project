let express    = require('express');        // call express
let app        = express();                 // define our app using express
let bodyParser = require('body-parser');
let mongoose   = require('mongoose');
let morgan      = require('morgan');
const acl =  require('express-acl');
let jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
let config = require('../config'); // get our config file
let User   = require('../app/models/Schema'); // get our mongoose model



 // use body parser so we can get info from POST and/or URL parameters
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

 exports.post_request = function(req, res) {
        User.findOne({username:req.body.username},function(err,username){
          if (err) {
            throw err;
          }
          if(!username){
            res.json({success: false, message : 'Authentication Failed. user not found'})
          }
          else if (username) {
                  console.log(username.role);
                  if (username.password !=req.body.password) {
                       res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                   }
                   else{
                     let token = jwt.sign(username,config.secret, {expiresIn : 1440});
                     res.json({
                       success: true,
                       message: 'Enjoy your token!',
                       token: token
                     });
                    }
          }
        });
 };

exports.use_function = function(req,res,next){
  let token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
       // verifies secret and checks exp
       jwt.verify(token, config.secret, function(err, decoded) {
       if (err) {
           return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
           // if everything is good, save to request for use in other routes
            req.decoded = decoded;
            next();
         }
      });

 } else {
   // if there is no token
   // return an error
   return res.status(403).send({
       success: false,
       message: 'No token provided.'
   });
 }
};

exports.normal_post = function(req,res){
  let user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.name = req.body.name;
  user.password = req.body.password;
  user.group = req.body.group;

  user.save(function(err) {
           if (err)
               res.send(err);
           console.log("saved successfully");
           res.json({ message: 'Bear created!' });
       })
};

exports.get_request = function(req,res){
  console.log(req.decoded);
  let role = req.decoded._doc.role;
  console.log(role);
  if(role==='admin'){
    User.findById(req.params.user_id,function(err,user){
      if(err) res.send(err);

      res.json({status:'ok',user});
    })
  }  else{
    res.json({message: 'not authorised to access data'});
  }
};

exports.put_request = function(req,res){
  let role = req.decoded._doc.role;
  if (role === 'user') {
    User.findById(req.params.user_id,function(err,user){
      let id = req.params.user_id;
      if (err) {
        res.send(err);
      }
      user.name = req.body.name;
      user.save(function(err){
        if (err) {
          res.send(err);
        }
        let js = [{'status': 'ok', 'data':`${id}`}];
        //js = js.concat(id);
        res.json(js);
      });
    });
  } else{
    res.json({message: 'not authorised to access data'});
  }
};

exports.delete_request = function(req,res){
  User.remove({_id:req.params.user_id}, function(err, user){
    if (err) {
      res.send(err);
    }
    let js = [{'status': 'ok', 'data':'null'}];
    js = js.concat(user);
    res.json(js);
  });
};
