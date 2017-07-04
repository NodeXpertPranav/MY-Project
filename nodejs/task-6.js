let md = require('./task-6module.js');

let arg1 = process.argv[2];
let arg2 = process.argv[3];

function print(err, res) {
  if(err){
      console.error(err);
  } else {
    res.forEach(item=>{
      console.log(item);
    })
  }
 }

 md(arg1,arg2,print);
