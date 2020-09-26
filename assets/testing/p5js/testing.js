let x = 0;
let y = 0;
let centerX = 0;
let centerY = 0;
let speedX = 0;
let speedY = 0;
let accelerationX = 1.05;
let accelerationY = 1.005;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width/3) + width / 5;
  y = random(height/2) + height / 5;
  centerX = random(10) + width/2 - 5;
  centerY = random(10) + height/2 - 5;
}

function draw() {
  background(0, 10);
  noStroke();
  fill(255);
  ellipse(x, y, 15, 15);
  updateXY();
}

function updateXY(){
  x += getSpeedX();
  y += getSpeedY();
  checkDirectionX();
  checkDirectionY();
}

function getSpeedX(){
  return speedX  = speedX + accelerationX / 2;
}

function getSpeedY(){
  return speedY  = speedY + accelerationY / 2;
}

function checkDirectionX(){
  if (x - (centerX + 10) < 0){
    accelerationX = 1.05;
  } else if (x - (centerX + 10) > 0){
    accelerationX = -1.05;
  }
}

function checkDirectionY(){
  if (y - centerY < 0){
    accelerationY = 1.005;
  } else if (y - centerY > 0){
    accelerationY = -1.005;
  }
}

function mouseClicked() {
  x = random(width/3) + width / 5;
  y = random(height/2) + height / 5;
  speedX = 0;
  speedY = 0;
  centerX = random(10) + width/2 - 5;
  centerY = random(10) + height/2 - 5;
}

function keyPressed() {
  if (key = 'c'){
    centerX = random(100) + width/2 - 5;
    centerY = random(100) + height/2 - 5;
  }
}
