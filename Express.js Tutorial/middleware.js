// Middleware function typically perform some operation on request and response and then call the next function in the stack, which might be more middleware or a route handler.

const express = require('express');
const app = express()

const port = 3000;

const myMiddleware = (req, res, next) => {
    console.log('I am middleware')
    next()
}

// To load the middleware function, call app.use(), specifying the middleware function
app.use(myMiddleware)

app.get('/', (req, res) => {
    res.send('Hello')
})

// Errors are handled by one or more special middleware functions that have four arguments, instead of the usual three: (err, req, res, next)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})