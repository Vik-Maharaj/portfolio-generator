const profileDataArgs = process.argv.slice(2, process.argv.length);

console.log(profileDataArgs);

var message = 'Hello Node!';

var sun = 5 + 3;

console.log(message);

console.log(sum);

// more examples here

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node.js World!');
}).listen(8080);

var http = require('http');
var dateTime = require('./modules');
 
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Current date and time: " + dateTime.CurrentDateTime());
    res.end();
}).listen(8080);


var http = require("http");  
http.createServer(function (request, response) {  
 // Send the HTTP header   
   // HTTP Status: 200 : OK  
   // Content Type: text/plain  
   response.writeHead(200, {'Content-Type': 'text/plain'});  
   // Send the response body as "Hello World"  
   response.end('Hello World\n');  
}).listen(8081);  
// Console will print the message  
console.log('Server running at http://127.0.0.1:8081/');  
