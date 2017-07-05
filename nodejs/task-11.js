const fs = require('fs');
const http = require('http');
const arg1 = process.argv[2];
const arg2 = process.argv[3];

const server = http.createServer(function callback(req, res){
  let readStream = fs.createReadStream(arg2);
  readStream.on('open', function(){
    readStream.pipe(res);
  });
  server.close();
});
server.listen(arg1);
