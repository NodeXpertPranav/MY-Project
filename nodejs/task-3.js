var fs = new require('fs');
let path = process.argv[2];
let txt;
for(let i=0; i< process.argv.length;i++){
  if(i==2){
      txt = fs.readFileSync(process.argv[2]).toString();
  }
}

let num = txt.split('\n').length;
console.log(num-1);

// var fs=require('fs');
//  let filename=process.argv[2];
// var data=fs.readFileSync(filename);
// var res=data.toString().split('\n').length;
// console.log(res-1);
