"use strict";
exports.__esModule = true;
function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log('Finally: ' + i);
}
doSomething();
var Point_1 = require("./Point");
var p = new Point_1.Point(10, 100);
p.draw();
