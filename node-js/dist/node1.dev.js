"use strict";

// console.log("Hello world ");
// const http = require('http');
// const hostname = '127.0.0.1'; // localhost
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World,Adeel Zafar is here 907 ...!!!');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end('Hello World!');
}).listen(8080);