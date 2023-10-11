// The Path module provides a way of working with directories and file paths.
const path = require('path');

// path.basename => gets the filename of the path assigned
const filename = path.basename('/user/yourname/node_project/file_name.js');

// path.dirname => used to get the directory name in which the particular file is present
const directoryName = path.dirname('/user/yourname/node_project/file_name.js');

// path.extname => used to get the extension of the file
const extension = path.extname('/user/yourname/node_project/file_name.js');

console.log("FileName: " + filename + " Directory Name: " + directoryName + " Extension: " + extension);
