const http = require('http');
const fs = require('fs');

// localhost is private address used by computer to refer to themselves
// it is equivalent to internal ip address 127.0.0.1
const hostname = 'localhost';
// The port is a number that servers use to connect to a specific process on our IP address as an endpoint or door.
const port = 8000;

const server = http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile('index.html', (err, content) => {
    if (err) {
      // If there's an error, send a 500 error response
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
    } else {
      // If the file is read successfully, send it as the response
      // writeHead => specifies the status code of the response, 200 => OK
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(content);
    }
  });
});


  // this specifies the HTTP header 
  // The Content-Type header is used to specify the data format or the media type, that is transmitted with the request or response
  // res.setHeader('Content-Type', 'text/html');

// The server is then attached to the port and host using the server.listen() function. The listen() function takes the port, host and the callback function as arguments. The callback function is called when the server begins to listen.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
