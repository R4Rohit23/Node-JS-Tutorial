// Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

const express = require('express');
const app = express();
const router = express.Router();

const port = 3000;

// To run all these below code you must provide the correct PATH

// ------------------------- Single callback function handler ------------------------------------
app.get('/singlecallback', (req, res) => {
    res.send("This is single callback function example");
});

// ------------------------ Multiple callback function handlers ----------------------------------
// for multiple callback you must use next to bypass the flow to next handler
app.get('/multiplecallback', (req, res, next) => {
    console.log("This is 1st callback");
    next();
}, (req, res) => {
    res.send("This is 2nd callback");
});

// --------------------------- Array of callback functions ---------------------------------------
const callback1 = (req, res, next) => {
    console.log('callback1');
    next();
};

const callback2 = (req, res, next) => {
    console.log('callback2');
    next();
};

const callbacklast = (req, res) => {
    res.send('last callback');
};

app.get('/arrayofcallback', [callback1, callback2, callbacklast]);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});

// ----------------------------- Express Router Expample -----------------------------------------
// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', (req, res) => {
    res.send('this is home page');
});

// define the about route
router.get('/about', (req, res) => {
    res.send('About birds');
});
  
module.exports = router

// use in any server
// const route = require('./Routing.js');
// app.use('/homepage', route);