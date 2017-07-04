var fs=require('fs');
let arg1 = process.argv[2];
let arg2 = process.argv[3];


function count(callback) {
    fs.readdir(arg1, function  (err, list) {
      if(err){
        return callback(err);
      }
      else  {
        list.forEach(function(item){
         if (item.includes("."+arg2)){
           callback(null, item);
        }
    });
 }
});
}

function print(err, res) {
  if(err){
      console.error(err);
  } else {
    console.log(res);
  }
 }
count(print);
