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


// var http = require('http');
// var url = require('url');
// var querystring = require('querystring');

// http.createServer(function(request, response) {

//   var pathname = url.parse(request.url).pathname;
//   var query = url.parse(request.url).query;
//   var id = querystring.parse(query)['id'];

//   var result = {
//     'pathname': pathname,
//     'id': id,
//     'value': Math.floor(Math.random() * 100)
//   };

//   setTimeout(function() {
//     response.writeHead(200, {"Content-Type": "application/json"});
//     response.end(JSON.stringify(result));
//   }, 2000 + Math.floor(Math.random() * 1000));

// }).listen(
//   3000,
//   function() {
//     console.log('Echo Server listening on port 8080 Helloooo');
//   }
// );


// var http = require('http');
// http.createServer(function (req, res) 
// {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
exports.myDateTime = function () {
  return Date();
};
var date=this.myDateTime();
console.log(date);