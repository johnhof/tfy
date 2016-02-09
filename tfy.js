'use strict';

let thenify = require('thenify');

module.exports = function (func, context) {
  // I know, right?
  return context ? thenify(func).bind(context) : thenify(func);
};
