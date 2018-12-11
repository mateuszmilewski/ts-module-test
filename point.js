"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.simpleDraw = function () {
        console.log("I'm to lazy to write real implementation... so I'm just giving you x= " + this.x + " and y= " + this.y);
    };
    return Point;
}());
exports.Point = Point;
