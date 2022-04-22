let angle = 0;
let pothole, parking;
var manhole;
var sign;
var navigator;
var mhtext;


function preload(){
  pothole = loadImage('metal4.jpeg');
  parking = loadImage('NOPARK.jpeg');
  manhole = loadJSON("manhole.json");
  sign = loadJSON("sign.json");
  navigator = loadJSON("Navigator.json");
  mhtext = loadFont("font1.ttf");
  
}


function setup() {
  createCanvas(1000, 600, WEBGL);
  
  print ("Slide mouse to zoom");
  
}



function draw() {
  
  background(30);
  noStroke();
  
  //global light
  pointLight(250,250,250,-250,0,50);
  pointLight(250,250,250,-300,100,50);
  
  //camera
    
  camera(0,0,(height/2) / tan(PI/6)+mouseX*-.16,0,0,0,0,1,0);
  
  
  //manhole cover
  push();
  translate(-270,0,0);
  texture(pothole);
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  ellipsoid(50, 50, 3);
  pop();
  
  //sign
  push();
  ambientLight(255,255,255);
  texture(parking);
  rotateX(frameCount * -0.01);
  rotateZ(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  plane(100,150);
  pop();
  
  //navigator lights
  pointLight(255,0,0,300,100,50);
  pointLight(0,0,250,250,-250,50);
  pointLight(0,225,0,150,300,100);
  pointLight(100,100,0,0,0,100);
  
  //navigator
  push();
  fill(255);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * -0.01);
  beginShape();
  
  vertex(270,-30);
  vertex(270,45);
  vertex(220,60);
  
  vertex(270,-30);
  vertex(320,60);
  vertex(270,45);

  endShape(CLOSE);
  pop();
 
  
  //load and set text 
  textFont(mhtext);
  noStroke();
  textSize(25);
  
  //load jsons
  fill(manhole.r, manhole.g, manhole.b);
  text(manhole.name,-310,150);
  text(sign.name, -10, 150);
  text(Navigator.name, 230,150);
  
  
  
}