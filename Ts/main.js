"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = require("./Point");
var likes_component_1 = require("./likes-component");
// const ColorRed = 0
// const ColorGreen = 1
// const ColorBlue = 2
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// interface Point {
//   x: number;
//   y: number;
// }
var drawPoint = function (point) {
    //.......
};
// class Point {
//   private x: number | undefined;
//   private y: number | undefined;
//   constructor(x?: number, y?: number) {
//     this.x = x;
//     this.y = y;
//   }
//   draw() {
//     console.log("hey");
//   }
// }
// const point = new Point(1, 3);
var point = new Point_1.Point(1, 3);
point.draw();
var likes = new likes_component_1.LikesComponent(false, 9);
likes.onClick();
console.log("The likes number is ".concat(likes.likesCount, " and is selected is ").concat(likes.isSelected));
