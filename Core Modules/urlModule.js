// URL module is core module that help in parsing a URL
const url = require('url');

const myurl = url.parse("https://www.scaler.com/topics/nodejs/urls-and-query-strings-modules-in-nodejs/");

console.log(myurl);