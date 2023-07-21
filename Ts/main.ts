import { Point } from "./Point";
import { LikesComponent } from "./likes-component";
// const ColorRed = 0
// const ColorGreen = 1
// const ColorBlue = 2

enum Color {
  Red,
  Green,
  Blue,
}

// interface Point {
//   x: number;
//   y: number;
// }

let drawPoint = (point: Point) => {
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

const point = new Point(1, 3);
point.draw();

const likes = new LikesComponent(false, 9);
likes.onClick();
console.log(
  `The likes number is ${likes.likesCount} and is selected is ${likes.isSelected}`
);
