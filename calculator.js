// Here we are going to introduce how to create your own module means user-defined module in Node.js

// use exports keyword to export our module anywhere we required
exports.add = function(num1, num2) {
    return num1 + num2;
}

exports.sub = (num1, num2) => num1 - num2;

exports.mul = (num1, num2) => num1 * num2;

exports.div = (num1, num2) => num1 / num2;

// you can also export the complete object
module.exports = {
    area(width) {
        return width * width;
    },

    perimeter(width) {
        return 4 * width;
    },
};

