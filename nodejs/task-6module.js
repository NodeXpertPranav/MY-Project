let fs = require('fs');
var array=[];
module.exports = function(arg1,arg2,callback){
  fs.readdir(arg1, function  (err, list) {
    if(err){
      return callback(err);
    }
    else  {
      list.forEach(function(item){
         if (item.includes("."+arg2)){
           array.push(item);
         }
      });
      return callback(null,array)
    }
  });
}
