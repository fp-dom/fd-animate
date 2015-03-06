"use strict";

var curry3 = require("fj-curry").curry3;


var _animate = function (animFunc, confFunc, elem) {
  return elem.animate(animFunc(), confFunc());
};

module.exports = curry3(_animate);