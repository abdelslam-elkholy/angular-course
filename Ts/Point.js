"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("hey");
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value >= 5) {
                this._x = value;
            }
            else {
                throw "enter valid value";
            }
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
