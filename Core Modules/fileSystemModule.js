// this module allows you to work with the file system on your computer
const fs = require('fs');

// read the file
fs.readFile('file.txt', function(err, data) {
    console.log(data.toString());
});

// append specified content to the file
fs.appendFile('file.txt', ' This text is being appended!', function(err) {
    if(err) throw err;
});

// writeFile removes all the data and add new data
fs.writeFile('file.txt', 'This is created by writeFile', function(err) {
    if(err) throw err;
    // console.log("File has been saved");
});

// delete the file from the file system
fs.unlink('file.txt', function(err) {
    if(err) throw err;
    console.log("File has been deleted");
})
