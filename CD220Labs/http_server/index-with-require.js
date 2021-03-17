const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  var dateVal = today.getDate();
  var greeting = "It is still not morning"
  if (dateVal.getHours()>0 && dateVal.getHours()<12) {
    greeting = "Good morning!"
  } else if (dateVal.getHours()>=12 && dateVal.getHours()<18) {
    greeting = "Good afternoon!"
  }else if (dateVal.getHours()>=18 && dateVal.getHours()<21) {
    greeting = "Good evening!"
  }else if (dateVal.getHours()>=21 && dateVal.getHours()<24) {
    greeting = "Good night!"
  }
  res.write('<h1>Hello,' +greeting+ ' Today is '+dateVal+'</h1>');
  res.end();
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);
