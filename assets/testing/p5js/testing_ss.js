let sin, noise;
let state;
let sound, startTime;
let canvas, thecanvas, checkaudio;
let isiPhone;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - 30);
  getAudioContext().suspend();
	isiPhone = isIphone = window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iphone/i);
	thecanvas = document.getElementsByTagName("canvas")[0];
	thecanvas.addEventListener("mousedown", processEv, false);
	thecanvas.addEventListener("touchend", processEv, false);
	canvas.position(0,30);
	checkaudio = createButton("Audio");
	checkaudio.mousePressed(startAudio);
  background(200);
  state = -1;
	sound = 0;
	startTime = 0;
  textFont("Trebuchet", 20);
  print("version: 0.50");
}

function draw() {
  background(0);
  checkState();
  fill(255);
  text("state: " + state, 20, 20);
  text("time: " + round(millis()), 20, 40);
  stroke(200,100,100);
}

function play() {
	if (sound === 0) {
		sin.start();
	} else {
		noise.start();
	}
}

function stop() {
	if (sound === 0) {
		sin.stop();
	} else {
		noise.stop();
	}
	sound = (sound + 1) % 2;
}

function processEv(event) {
  if (state === -1) {
		userStartAudio();
		if (isiPhone) {
			let a = new p5.AudioIn();
		}
    sin = new p5.Oscillator("sine");
		sin.freq(300);
		sin.amp(0.8);
		noise = new p5.Noise("brown");
		noise.amp(0.4);
    state = 0;
  } else if (state === 0) {
		if (sound === 0) {
			sin.start();
		} else {
			noise.start();
		}
		play();
		startTime = millis();
    state = 1;
  }
	print(event);
	event.preventDefault();
  return false;
}

function startAudio() {
	userStartAudio();
	sin = new p5.Oscillator("sine");
	sin.freq(300);
	sin.amp(0.8);
	noise = new p5.Noise("brown");
	noise.amp(0.4);
	state = 0;
}

function checkState() {
  if (millis() > startTime + 1000 && state === 1) {
    stop();
    state = 0;
  }
}
