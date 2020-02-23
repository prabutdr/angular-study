
class Point {
  // private x: number;  // by default public
  // private y: number;

  // constructor(x?: number, y?: number) {
  //   this.x = x;
  //   this.y = y;
  // }

  // simplified way
  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log("Drawing", this._x, this._y);
  }

  calculateDistance(another: Point) {
    console.log("Calculating distance from ", this._x, this._y, 'to', another._x, another._y);
  }

  get x() {   // only read only
    return this._x;
  }

  get y() {
    return this._y;
  }

  set y(value) {
    if (value < 0)
      throw new Error('Value cannot be less than 0.');

    this._y = value;
  }
}

let point: Point;
point = new Point(100);
point.y = 20;
point.draw();
// point.x = 10;  // private properties
// point.y = 40; 

let point1 = new Point(1, 2);
point.calculateDistance(point1);