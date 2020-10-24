let mp, bp, state, doubles, drag, click, touch, x, y;
let b1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  state = 0;
  doubles = 0;
  touch = 0;
  drag = 0;
  click = 0;
  touch = 0;
  mp = 0;
  bp = 0;
  x = 0;
  y = 0;
  b1 = new button(width/2, height/2, 30, color(255), color(100));
  textFont("Trebuchet", 20);
  textAlign(CENTER);
}

function draw() {
  background(25);
  b1.display(mouseX, mouseY);
  fill(255);
  noStroke();
  text("state: " + state, width / 2, 40);
  text("doubleclick: " + doubles, width / 2, 60);
  text("click: " + click, width / 2, 80);
  text("drag: " + drag, width / 2, 100);
  text("touch: " + touch, width / 2, 120);
  text("mouseP: " + mp, width / 2, 140);
  text("bP: " + bp, width / 2, 160);
  text("x: " + x, width / 2, 180);
  text("y: " + y, width / 2, 200);
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

function mousePressed() {
  mp += 1;
  if (b1.contains(mouseX, mouseY)) {
    bp += 1;
  }
}
