
// in line annotation
let drawPoint = (point: { x: number, y: number }) => {
  console.log('Drawing point', point);
}

drawPoint({ x: 1, y: 2 });

// Better way - interfaces
// Only declarations allowed
interface Point {
  x: number,
  y: number
}

let drawPoint1 = (point: Point) => {
  console.log("Drawing point with interfaces", point);
}

let point = { x: 3, y: 4 };
drawPoint1(point);