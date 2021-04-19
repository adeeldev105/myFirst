const http = require('http');
const port = 8010;
const localhost = '127.0.0.1';
var myServer = http.createServer((req, res) => {
    // res.end("Server's response created")
    res.end("Helloooooooooooooooooo");
    // res.end();
});
myServer.listen(port, localhost, () => {
    console.log("Hello world .. server is listenning ...!!!!");
});