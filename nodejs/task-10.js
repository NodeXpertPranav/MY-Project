let net = require('net');
let arg1 = process.argv[2];
let server = net .createServer(function(socket){
  let  d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth()+1;
  let day = d.getDate();
  let hrs = d.getHours();
  let min = d.getMinutes();
  if(month<10){
    month = '0'+ month;
  }
  if(day<10){
    day = '0'+ day;
  }

  let str = year + '-' + month + '-' + day + " " + hrs + ":" + min + "\n";
  socket.end(str);
  server.close();
});
server.listen(arg1);
