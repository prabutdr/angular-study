"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.distance = function (another) {
        console.log('Finding distance...');
    };
    return Point;
}());
exports.Point = Point;
var point1 = new Point(1, 2);
var point2;
point1.draw();
