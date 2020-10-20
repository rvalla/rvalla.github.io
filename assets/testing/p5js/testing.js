let mic, recorder, soundFile, env, comp;
let startTime;
let state;
let size;
let level;
let wait;
let error;
let nerror;

function setup() {
  createCanvas(windowWidth, windowHeight);
  size = getSize();
  background(200);
  state = -1;
  wait = 250;
  error = "0";
  nerror = 0;
  textFont("Trebuchet", 20);
  print("version: 0.55");
}

function draw() {
  background(0);
  checkState();
  fill(255);
  text("state: " + state, 20, 20);
  text("time: " + round(millis()), 20, 40);
  text("error: " + error, 20, 60);
  text("error nº: " + nerror, 20, 80);
  stroke(200,100,100);
  strokeWeight(3);
  noFill();
  ellipse(width/2, height/2, size, size);
  if (state > -1) {
    level = mic.getLevel();
    fill(getColor(level));
    noStroke();
    ellipse(width/2, height/2, level * size, level * size);
  }
}

function mousePressed() {
  if (state === -1) {
    comp = new p5.Compressor();
    //env = new p5.Envelope(1, 0, 1, 0);
      //this.sf = new p5.SoundFile();
    //  this.mic = new p5.AudioIn();
      //this.mic.start();
      //this.rec = new p5.SoundRecorder();
      //this.rec.setInput(this.mic);
    // create an audio in
    mic = new p5.AudioIn();

    //comp.connect(mic);
    recorder = new p5.SoundRecorder();
    mic.start();
    recorder.setInput(mic);
    soundFile = new p5.SoundFile();
    state = 0;
  } else if (state === 0 && mic.enabled) {
    state = 1;
    recorder.record(soundFile);
    startTime = millis();
  }
}

function checkState() {
  if (millis() > startTime + 5000 && state === 1) {
    recorder.stop();
    state = 2;
  } else if (millis() > startTime + wait && state === 2) {
    try {
      save(soundFile, "test.wav");
      print("saving audio...");
      state = 0;
      error = "0";
    } catch {
      print("can't save audio...");
      wait += 250;
      error = "can't save";
      nerror += 1;
    }
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
