export class Point {
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }

  distance(another: Point) {
    console.log('Finding distance...');
  }
}

let point1 = new Point(1, 2);
let point2: Point
point1.draw();