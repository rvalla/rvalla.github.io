let state, doubles, drag, click, touch, x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  state = 0;
  doubles = 0;
  touch = 0;
  drag = 0;
  click = 0;
  touch = 0;
  x = 0;
  y = 0;
  textFont("Trebuchet", 20);
  textAlign(CENTER);
}

function draw() {
  background(25);
  fill(255);
  noStroke();
  text("state: " + state, width / 2, 40);
  text("doubleclick: " + doubles, width / 2, 60);
  text("click: " + click, width / 2, 80);
  text("drag: " + drag, width / 2, 100);
  text("touch: " + touch, width / 2, 120);
  text("x: " + x, width / 2, 140);
  text("y: " + y, width / 2, 160);
}

function mouseClicked() {
  click += 1;
  x = mouseX;
  y = mouseY;
}

function doubleClicked() {
  doubles += 1;
  state += 1;
  x = mouseX;
  y = mouseY;
}

function mouseDragged() {
  drag += 1;
  x = mouseX;
  y = mouseY;
}

function touchStarted() {
  if (touches.length === 1) {
    touch += 1;
    x = mouseX;
    y = mouseY;
  } else if (touches.length === 2) {
    touch += 1;
    state += 1;
    x = mouseX;
    y = mouseY;
  }
}

function touchMoved() {
  drag += 1;
  x = mouseX;
  y = mouseY;
}
