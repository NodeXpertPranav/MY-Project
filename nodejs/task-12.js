const http = require('http');
var map = require('through2-map');
const arg1 = process.argv[2];

const server = http.createServer(function(req,res){
  if(req.method=='POST'){
    req.pipe(map(function (chunk){
      return chunk.toString().split('').join('').toUpperCase();
    })).pipe(res);
  }
  server.close();
});
server.listen(arg1);
