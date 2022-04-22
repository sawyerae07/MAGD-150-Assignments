var rectColor, rectHighlight;
var circleColor, circleHighlight;

var overRect = false;
var overCircle = false;
let screenColor = 25;

//ellipse
let x = 140;
let xspeed = 3;


//line
let a= 360;


function setup() {
  createCanvas(600, 400);

  //rectangle colors
  rectColor = color(255,0,0);
  rectHighlight = (255);

  //circle colors
  circleColor = color(0,255,0);
  circleHighlight = color(255);

}

function draw() {
  background(220);


  //TV
  noStroke();
  fill(100);
  rect(95,80,425,300);

  //TV Screen
  fill(screenColor);
  rect(115,100,305,260);
  

  //Hover over rectangle button
  if (mouseX>450 && mouseX<490 && mouseY>200 && mouseY<225) {
    fill(rectHighlight);
    textSize(8);
    text('CHANGE CHANNEL',432,195);
  } else {
    fill(rectColor);
  }
    rect(450,200,40,25);


  //Hover over circle button
 if(dist(mouseX, mouseY,470,150)<20) {
    fill(circleHighlight);
   textSize(12);
   text('ON/OFF',448,120);
  } else {
    fill(circleColor);
  }
    circle(470,150,40);

 
  // circle button toggle "TV ON"
 
   
if (overCircle){

  // conditional to change channels
  if (overRect){
     screenColor = 230;
    push();
    fill(0);
    ellipse(x, 220, 30,30);
    pop();
    x+=xspeed;
 
    if(x<130 || x>405){
      xspeed *= -1;
    }
  } else if (!overRect) {
    screenColor = 230
  push();
  stroke(40)
  line(115, a, 420, a);
  a-= 5;
  pop();
  if (a<100){
    a=360;
    }
  }

} else {
   screenColor = 20;
 }
}
 
function mousePressed(){
  // round button check
  if (dist(mouseX, mouseY,470,150)<20){
    overCircle = !overCircle;
  }
  // rect button check
  else if (mouseX>450 && mouseX<490 && mouseY>200 && mouseY<225){
    overRect = !overRect;
  }
 
}