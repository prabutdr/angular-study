"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    // simplified way
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("Drawing", this._x, this._y);
    };
    return Point;
}());
exports.Point = Point;
