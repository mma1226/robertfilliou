let font1;

let cylinderRadius = 212;
let cylinderWidth = 700;
let textTexture;
let indexWord = 0;
let words = ['ROBERT FILLIOU MULTIPLES & EDITIONS'];


function preload() {
  font1 = loadFont('BastardoGroteskish_Bold.otf');
}

function setup() {
	
	var canvas = createCanvas(windowWidth, windowHeight,WEBGL);
	canvas.parent('sketch-container');
    textTexture = createGraphics(2*PI*cylinderRadius,windowHeight*2);
	textTexture.colorMode(HSB);	
	textTexture.background(255);
    textTexture.fill(255);
	textTexture.textFont(font1);
    textTexture.textAlign(CENTER);
    textTexture.textSize(70);

}

function draw() {
	//scale(1, -1);  // uncomment this line to save an image or thumb. Then comment out the line.
	background(0);
	noStroke();
	

	var rotation = 1;

	let wave = (sin(frameCount * 0.005 + (0.005) * 0.005) * 1);
	
	
	textTexture.background(0);
	for(let i = 0; i <=55; i++){
		textTexture.fill(226,100,100);
		textTexture.text(words[indexWord], PI*cylinderRadius,i*80);
	}
	
	//image(textTexture, -1000,-1000);
	
	translate(-windowWidth, -100);
	for(let i = 0; i <= 10; i++){
		translate(cylinderRadius*2+100, 0);
		push();
		
		rotateZ(radians(45));
		push();
		
    if(i%2==0){
      rotateY(-frameCount * 0.01);  
    }else{
      rotateY(frameCount * 0.02);  
    }
    
		texture(textTexture);
		cylinder(cylinderRadius, windowHeight*2,24);
		pop();
		pop();
	}	
}

function changeWord() {
	indexWord++;
	if(indexWord > 4){
		indexWord = 0;
	}
	setTimeout(changeWord, 500)
}