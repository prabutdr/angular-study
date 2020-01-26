function log(message) {
  console.log(message);
}

var message = 'Hello World';

log(message);

function doSomething() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  // console.log('Finally: ' + i);
}

doSomething();

import { Point } from './Point';
let p = new Point(10, 100);
p.draw();