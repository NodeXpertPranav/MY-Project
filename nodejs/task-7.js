// let http = require('http');
// let arg  = process.argv[2];
//
// function callback(response){
//   http.get(arg, function(error, data){
//     if(err){
//       return response.on(err);
//     }
//     else{
//       return response.on(null, data);
//     }
//   });
// }
//
// function print(err, res){
//   if(err){
//     console.error(err);
//   }
//   else{
//     console.log(res);
//   }
// }
// callback(print);

var http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
});
