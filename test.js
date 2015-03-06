"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var animate = _interopRequire(require("./"));

var p = document.createElement("p");

p.innerHTML = "HELLO";

document.body.appendChild(p);

animate(function () {
  return [{ opacity: "0.5", transform: "scale(0.5)" }, { opacity: "1.0", transform: "scale(1)" }];
}, function () {
  return { direction: "alternate", duration: 500, iterations: Infinity };
}, p);


it("fd-animate", function () {
  p.pause();
  assert.equal(p.playState, "paused");
  assert.equal(p.currentTime > 1, true);
});