// here we are creating simple server with the help of Express framework
const express = require('express');

// it is module that contains useful methods of espress module
const app = express();
const port = 3000;

// The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root
// The callback function takes a request and a response object as arguments, and calls send() on the response to return the string. 
app.get("/", (req, res) => {
    res.send("Hello this is express!")
});

// this creates our server on given port, here at port 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
}); 