let mongoose = require('mongoose');

let schema = mongoose.Schema;

let userSchema = new schema({
  username: { type:'String' , unique:true},
  email :   { type: 'String', unique:true},
  name :    { type:'String'},
  password : {type : 'String'},
  role : {type : 'String'},

});

//var user = mongoose.model('User',userSchema);
module.exports = mongoose.model('User', userSchema);
