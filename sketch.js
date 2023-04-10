let font1;

let cylinderRadius = 217;
let cylinderWidth = 700;
let textTexture;
let indexWord = 0;
let words = ['ROBERT FILLIOU MULTIPLES & EDITIONS'];
let cam;

function preload() {
  font1 = loadFont('assets/ITC Avant Garde Gothic Std Bold.otf');
}


function setup() {
  var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent('sketch-container');
  textTexture = createGraphics(2 * PI * cylinderRadius, windowHeight * 2);
   textTexture.colorMode(HSB);
  textTexture.background(0, 0, 0, 0)
  textTexture.fill(255);
  textTexture.textFont(font1);
  textTexture.textAlign(CENTER);
  textTexture.textSize(90);
  orbitControl();
  
  // set up camera
  cam = createCamera();
  cam.setPosition(0, 0, 500);
}
function draw() {
  background(0);
  noStroke();

  var rotation = 1;

  let wave = (sin(frameCount * 0.005 + (0.005) * 0.005) * 1);

  textTexture.background(0);
  for (let i = 0; i <= 55; i++) {
    textTexture.fill(226, 100, 100);
    textTexture.text(words[indexWord], PI * cylinderRadius, i * 80);
  }

  // update camera position based on mouse position only when the mouse button is pressed
  if (mouseIsPressed) {
    let camX = map(mouseX, 0, width, -1000, 1000);
    let camY = map(mouseY, 0, height, -1000, 1000);
    cam.lookAt(camX, camY, 0);
  }

  translate(-windowWidth, -100);
  for (let i = 0; i <= 10; i++) {
    translate(cylinderRadius * 2 + 100, 0);
    push();

    rotateZ(radians(45));
    push();

    if (i % 2 == 0) {
      rotateY(-frameCount * 0.01);
    } else {
      rotateY(frameCount * 0.005);
    }

    texture(textTexture);
    cylinder(cylinderRadius, windowHeight * 2, 24);
    pop();
    pop();
  }
}

let mouseIsPressed = false;

function mousePressed() {
  mouseIsPressed = true;
}

function mouseReleased() {
  mouseIsPressed = false;
}

function changeWord() {
  indexWord++;
  if (indexWord > 4) {
    indexWord = 0;
  }
  setTimeout(changeWord, 500)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
