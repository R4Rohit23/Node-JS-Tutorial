// this module allows you to work with the file system on your computer
const fs = require('fs');

// read the file
fs.readFile('file.txt', (err, data) => {
    if (err) {
        console.log(err);
        return err;
    }
    console.log(data.toString());
});

// append specified content to the file
fs.appendFile('file.txt', ' This text is being appended!', function(err) {
    if(err) throw err;
});

// writeFile removes all the data and add new data
fs.writeFile('file.txt', 'This is created by writeFile', function(err) {
    if(err) throw err;
    console.log("File has been saved");
});

// delete the file from the file system
fs.unlink('file.txt', function(err) {
    if(err) throw err;
    console.log("File has been deleted");
})

// fs.chmod() method: This is a function provided by Node.js's File System module, used to asynchronously change the permissions of a file identified by its path. It takes a file path and an octal number representing the new file mode as arguments.
// Common chmod values include:
// 400 (Owner Read)
// 200 (Owner Write)
// 100 (Owner Execute)
// 040 (Group Read)
// 020 (Group Write)
// 010 (Group Execute)
// 004 (Others Read)
// 002 (Others Write)
// 001 (Others Execute)
// By summing the above values, we can have combinations like 600 (Owner can Read and Write), 644 (Owner can Read & Write, Group and Others can Read), 755 (Owner can Read, Write & Execute, Group and Others can Read & Execute), and others.

fs.chmod('file.txt', 400);
// in above case we change the mode of our text file to owner read means it can be read by its creater
