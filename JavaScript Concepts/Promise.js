// Prompt is use to take input from the user in the terminal window
let prompt = require('prompt-sync')();
let fs = require('fs');

// Example of simple promise
// Promise is the object returned by the asynchronous function
const myPromise = new Promise((resolve,reject)=>{
    let filename = prompt('What is the name of the file ?');
    try {
      const data = fs.readFileSync(filename, {encoding:'utf8', flag:'r'}); 
      resolve(data);
    } catch(err) {
      reject(err)
    }
});

// Print the state of the promise in the terminal
console.log(myPromise);

// The method "then()", "catch()", and "finally()" are used to associate further  action with a promise that becomes settled
myPromise
  .then((result) => {
    console.log(result.message);
  })
  .catch((error) => {
    console.error(error.message);
  });