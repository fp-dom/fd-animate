# fd-animate

[![npm version](https://badge.fury.io/js/fd-animate.svg)](http://badge.fury.io/js/fd-animate)

> Animate DOM elements in functional way.

Check out the [live demo](http://requirebin.com/?gist=c3c0d6d4b4892f2da149)

## Installation

`npm install fd-animate --save`

## Usage

```js
let animate = require('fd-animate');

let animationFunction = () => [
      {cssProperty: value0},
      {cssProperty: value1},
      {cssProperty: value2},
     ];
let configFunction = () => ({
     duration: timeInMs,
     iterations: iterationCount,
     delay: delayValue
  })
  
let player = animate(animationFunction, configFunction, element);

```
