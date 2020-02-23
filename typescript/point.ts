
export class Point {
  // simplified way
  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log("Drawing", this._x, this._y);
  }
}
