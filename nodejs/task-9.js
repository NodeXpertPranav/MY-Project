var http = require('http');
var concat = require('concat-stream');

var urls = [];
var responses = [];
var count = 0;

for (var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

function readResponse(index) {
  http.get(urls[index], function(response) {
    response.pipe(concat(function(data) {
      responses[index] = data.toString();
      count++;

      if (count == 3) {
        responses.forEach(function(response) {console.log(response);});
      }
    }));
  });
}

for (var i = 0; i < urls.length; i++) {
  readResponse(i);
}
