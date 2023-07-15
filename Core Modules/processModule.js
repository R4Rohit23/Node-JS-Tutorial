// The process object provides information about, and control over, the current Node.js process
const process = require('process');

// The process.stdin is a standard Readable stream which listens for user input and is accessible via the process module. It uses on() function to listen for input events.
process.stdin.on('data', (userInput) => {
    console.log("Your name is: ", userInput.toString());
});

// This message will run first because JS doesn't wait for callback to complete i.e asynchronous process
console.log("Enter your name: ");

// The process.stdout property is an inbuilt application programming interface of the process module which is used to send data out of our program. A Writable Stream to stdout. It implements a write() method.
process.stdout.write("Hello I am in stdout");
