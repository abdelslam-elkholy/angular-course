export class Point {
  constructor(private _x?: number, private _y?: number) {}

  draw() {
    console.log("hey");
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value >= 5) {
      this._x = value;
    } else {
      throw "enter valid value";
    }
  }
}
