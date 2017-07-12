let express    = require('express');        // call express
let app        = express();                 // define our app using express
let bodyParser = require('body-parser');
let mongoose   = require('mongoose');
let morgan      = require('morgan');
const acl =  require('express-acl');
let jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
let config = require('./config'); // get our config file
let User   = require('./app/models/Schema'); // get our mongoose model
//mongoose.connect('mongodb://localhost/test');
let controller = require('./controller/controller.js');
 //CONFIGURATION
 let port = process.env.PORT || 8080;
 mongoose.connect(config.database);   // CONNECT WITH DATABSE
 //app.set('superSecret', config.secret); // secret variable

 // use body parser so we can get info from POST and/or URL parameters
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());

 // use morgan to log requests to the console
 //app.use(morgan('dev'));

// ROUTES FOR OUR API
// =============================================================================


let routes = express.Router();           // get an instance of the express Router

routes.post('/authenticate',controller.post_request);

routes.use(controller.use_function);

// more routes for our API will happen here
  routes.route('/user')

 .post(controller.normal_post);

  //get particular data based on id.
  routes.route('/user/:user_id')

  .get(controller.get_request)
 //
 //  // To update a user name based on user key.
  .put(controller.put_request);
 //
  // To delete a user from database
  //.delete(controller.delete_request);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
 app.use('/api', routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
