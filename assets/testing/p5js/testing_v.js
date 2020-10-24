let x;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
  x = 0;
}

function draw() {
  background(25, 15);
  fill(220, 180, 120);
  noStroke();
  x = constrain(mouseX, width / 3, 2 * width / 3);
  ellipse(x, height / 2, 15, 15);
}

function mousePressed() {

}
