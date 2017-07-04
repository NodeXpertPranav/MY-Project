var http = require('http')

http.get(process.argv[2], function (response) {
  var data1 = '';
  response.setEncoding('utf8')
  response.on('data',function(chunk){
     data1 += chunk;
  });
  response.on('end', function(){
    console.log(data1.length);
    console.log(data1);
  });
   response.on('error', console.error);
});
