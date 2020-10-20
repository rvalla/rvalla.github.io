let mic, recorder, soundFile, env, comp;
let startTime;
let state;
let size;
let level;

function setup() {
  createCanvas(windowWidth, windowHeight);
  size = getSize();
  background(200);
  state = 0;
  comp = new p5.Compressor();
  //env = new p5.Envelope(1, 0, 1, 0);
    //this.sf = new p5.SoundFile();
  //  this.mic = new p5.AudioIn();
    //this.mic.start();
    //this.rec = new p5.SoundRecorder();
    //this.rec.setInput(this.mic);
  // create an audio in
  mic = new p5.AudioIn();
  mic.start();
  //comp.connect(mic);
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  soundFile = new p5.SoundFile();
  //env.connect(soundFile);
}

function draw() {
  background(0, 10);
  checkState();
  stroke(200,100,100);
  strokeWeight(3);
  noFill();
  ellipse(width/2, height/2, size, size);
  level = mic.getLevel();
  fill(getColor(level));
  noStroke();
  ellipse(width/2, height/2, level * size, level * size);
}

function mousePressed() {
  if (state === 0 && mic.enabled) {
    state = 1;
    recorder.record(soundFile);
    startTime = millis();
  }
}

function checkState() {
  if (millis() > startTime + 3000 && state === 1) {
    recorder.stop();
    state = 2;
  } else if (millis() > startTime + 4000 && state === 2) {
    save(soundFile, "a.wav");
    state = 0;
  }
}

function getSize() {
  if (width < height) {
    return width / 2;
  } else {
    return height / 2;
  }
}

function getColor(l) {
  if (l < 0.3) {
    return color(60,140, 220);
  } else if (l >= 0.3 && l < 0.6) {
    return color(210, 210, 80);
  } else {
    return color(200,77,74);
  }
}
