# HW7
var playerX = 50;
var playerY = 50;
var colorFR = 243;
var colorFG = 200;
var colorFB = 65;
var colorS = 255;
var colorFRspeed = 0;
var colorFGspeed = 0;
var colorFBspeed = 0;
var colorSspeed = 0;

function preload() {
  soundFormats("mp3");
  bellSound = loadSound("bell.mp3");
   eggSound = loadSound("egg.mp3");
}
function setup() {
  createCanvas(500, 400);
}



function draw() {
  background(220);

  noStroke();
  //road
  fill(187, 133, 96);
  rect(0, 0, 400, 400);
  fill(184, 200, 84);
  rect(0, 0, 100, 300);
  rect(100, 200, 300, 100);
  rect(300, 300, 100, 200);


  noStroke();
  //fire
  fill(255, 60, 50);
  rect(0, 150, 100, 50);
  rect(200, 200, 50, 100);
  //
  fill(255, 60, 50);
  rect(410, 50, 20, 20);

  fill(0);
  triangle(430, 310, 420, 320, 440, 320);
  triangle(430, 350, 420, 340, 440, 340);
  triangle(410, 330, 420, 320, 420, 340);
  triangle(450, 330, 440, 320, 440, 340);

  stroke(255);
  strokeWeight(10);
  fill(243, 200, 65);
  ellipse(420, 200, 20)

  //player
  stroke(255,255,colorS);
  strokeWeight(50);
  fill(colorFR, colorFG, colorFB);
  ellipse(playerX, playerY, 25);
  colorFR = colorFR + colorFRspeed;
  colorFG = colorFG + colorFGspeed;
  colorFB = colorFB + colorFBspeed;
    colorS = colorS + colorSspeed;
  //
  stroke(0);
  strokeWeight(10);
  textSize(15);
  fill(255);
  text('Description', 410, 30);
  text('Fire', 410, 100);
  text('Egg', 410, 240);
  text('Control', 410, 370);
  //
  if (keyIsDown(UP_ARROW)) {
    playerY -= 1;
  }


  if (keyIsDown(DOWN_ARROW)) {
    playerY += 1;
  }
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= 1;
  }


  if (keyIsDown(RIGHT_ARROW)) {
    playerX += 1;
  }
  if (playerX < 40 ) {
    playerX = 40;
  }
  if (playerX > 60 && playerY < 240) {
    playerX = 60;
  }
  if ( playerY >260 && playerX < 340) {
    playerY = 260;
  }
    if (playerX > 360 ) {
    playerX = 360;
  }


  if (playerX > 260 && playerY > height) {
    stroke(0);
    strokeWeight(10);
    textSize(30);
    fill(255);
    text('Fried Egg!', 150, 200);
     bellSound.play();

  }
  if (playerY > 110 && playerY <200 ){
    eggSound.play();
    colorFGspeed = -1.5;
    colorSspeed = -1.5;
  }
    if ( playerY >200 ){
  eggSound.stop();
    colorFGspeed = 0;
    colorSspeed = 0;
  }
  
  
    if (playerX > 160 && playerX <300 ){
  eggSound.play();
    colorFRspeed = -0.75;
    colorFBspeed = -1.5;
  }
    
    if (playerX >260 ){
      eggSound.stop();
    colorFRspeed = 0;
    colorFBspeed = 0;
  }
      if (playerY >450 ){
      bellSound.stop();

  }
}
