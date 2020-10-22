let mic, recorder, soundFile, env, comp, rev;
let startTime;
let state;
let size;
let level;
let wait;
let error;
let nerror;
let b;
let inputL;

function setup() {
  createCanvas(windowWidth, windowHeight);
  getAudioContext().suspend();
  size = getSize();
  background(200);
  inputL = new inputLevel(5);
  state = -1;
  wait = 250;
  error = "0";
  nerror = 0;
  textFont("Trebuchet", 20);
  print("version: 0.59.3");
}

function draw() {
  background(0, 15);
  checkState();
  fill(255);
  noStroke();
  text("state: " + state, 20, 20);
  text("time: " + round(millis()), 20, 40);
  text("error: " + error, 20, 60);
  text("error nº: " + nerror, 20, 80);
  stroke(200,100,100);
  if (state > -1) {
    level = mic.getLevel();
    fill(255);
    noStroke();
    text("AudioIn: " + mic.stream, 20, 100);
    text("AudioIn: " + mic.mediaStream, 20, 120);
    text("Mic level: " + level, 20, 140);
    inputL.update(level);
    inputL.display();
  }
}

function mousePressed() {
  if (state === -1) {
    userStartAudio();
    comp = new p5.Compressor();
    comp.set(0.003, 30, 12, -24, 0.25);
    rev = new p5.Reverb();
    rev.drywet(0.5);
    mic = new p5.AudioIn();
    comp.connect(mic);
    rev.connect(mic);
    recorder = new p5.SoundRecorder();
    mic.start();
    mic.amp(0.5);
    recorder.setInput(mic);
    soundFile = new p5.SoundFile();
    soundFile.setVolume(1, 1);
    state = 0;
  } else if (state === 0 && mic.enabled) {
    recorder.record(soundFile);
    startTime = millis();
    state = 1;
  }
}

function checkState() {
  if (millis() > startTime + 5000 && state === 1) {
    recorder.stop();
    soundFile.load();
    state = 2;
  } else if (millis() > startTime + wait && state === 2) {
    if (soundFile.isLoaded()) {
      fill(255);
      noStroke();
      text(soundFile.duration(), 20, 160);
      text(soundFile.frames(), 20, 180);
      noLoop();
      state = 0;
    }
    try {
      saveSound(soundFile, "test.wav");
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
