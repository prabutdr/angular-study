
function log(msg) {
  console.log(msg);
}

let msg = "Hello World";
log(msg);

function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log('Finally: ' + i);
}

doSomething();