const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader = ('Content-Type' , 'text/plain');
  res.end('hello\n');
});

server.listen(port, hostname, ()=>{
  console.log('server running at http://${hostname}:${port}');
});

// const assert = require('assert');
//
// let obj = {a : {b : 1}};
// let obj1 = {a : {b : 1}};
//
// //assert.deepEqual(obj,obj1);
// function fun(callback){
//     assert.deepEqual(obj, function(err, data){
//        if(err){
//          throw new assert.AssertionError();
//        }
//        else{
//          let msg = "pass";
//          return callback(null, msg);
//        }
//     });
// }
// function print(err, data){
//   if(err){
//     console.error(err);
//   }
//   else{
//     console.log(data);
//   }
// }
// fun(print);
