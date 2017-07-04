var fs=require('fs');
let filename=process.argv[2];

function count(callback) {
    fs.readFile(filename, function  (err, fileContents) {

      if(err){
        return callback(err);
      } else {
        res = fileContents.toString();
        data = res.split('\n').length;
        callback(null, data);
    }
});
}

function print(err, res) {
  if(err){
    console.error(err);
  } else {
    console.log(res-1);
  }
 }
count(print);
