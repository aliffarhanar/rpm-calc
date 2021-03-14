/*jslint node:true */
'use strict';
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
module.exports = {

    // Arithmetic operators:
    '+': function (a, b) { return a + b; },
    '-': function (a, b) { return a - b; },
    '*': function (a, b) { return a * b; },
    '/': function (a, b) { return a / b; },
    '%': function (a) { return a /100; },
    'pow': Math.pow,
    '^': Math.pow,
    '!': factorialize,


    // Comparison operators:
    'max': Math.max,
    'min': Math.min,

    // Bitwise operators:
    // '&': function (a, b) { return a & b; }, // AND
    // '|': function (a, b) { return a | b; }, // OR
    // '^': function (a, b) { return a ^ b; }, // XOR
    // '<<': function (a, b) { return a << b; }, // left shift
    // '>>': function (a, b) { return a >> b; }, // sign-propagating right shift
    // '>>>': function (a, b) { return a >>> b; }, // zero-fill right shift

};