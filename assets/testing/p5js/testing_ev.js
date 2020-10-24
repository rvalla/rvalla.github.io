let mp, bp1, bp2, state, doubles, drag, click, touch;
let b1, b2;
let lastclick;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  state = 0;
  doubles = 0;
  touch = 0;
  drag = 0;
  click = 0;
  touch = 0;
  lastclick = 0;
  mp = 0;
  bp1 = 0;
  bp2 = 0;
  b1 = new button(width/3, 3 * height/4, 30, color(255), color(100));
  b2 = new button(2*width/3, 3 * height/4, 30, color(255), color(100));
  textFont("Trebuchet", 20);
  textAlign(CENTER);
}

function draw() {
  background(25);
  b1.display(mouseX, mouseY);
  b2.display(mouseX, mouseY);
  fill(255);
  noStroke();
  text("state: " + state, width / 2, 40);
  text("doubleclick: " + doubles, width / 2, 60);
  text("click: " + click, width / 2, 80);
  text("drag: " + drag, width / 2, 100);
  text("touch: " + touch, width / 2, 120);
  text("mouseP: " + mp, width / 2, 140);
  text("bP1: " + bp1, width / 2, 160);
  text("bP2: " + bp2, width / 2, 180);
  text("IsPressed: " + mouseIsPressed, width / 2, 200);
}

/*function mouseClicked() {
  click += 1;
}

function doubleClicked() {
  doubles += 1;
  state += 1;
}*/

function mouseDragged() {
  drag += 1;
}

/*function touchStarted() {
  if (touches.length > 0) {
    mp += 1;
    if (b1.contains(mouseX, mouseY)) {
      bp1 += 1;
      state += 1;
    } else if (b2.contains(mouseX, mouseY)) {
      bp2 += 1;
      state += 1;
    }
  }
}

function touchMoved() {
  drag += 1;
}*/

function mousePressed() {
  if (500 < millis() - lastclick) {
    if (b1.contains(mouseX, mouseY)) {
      bp1 += 1;
      state += 1;
    } else if (b2.contains(mouseX, mouseY)) {
      bp2 += 1;
      state += 1;
    }
    mp += 1;
    lastclick = millis();
  }
}
