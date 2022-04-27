//Here I call global variables.
var song;
var button;
var slider;
var slider2;
let img;
let headbang;
var rect1;


function setup() {
  createCanvas(600, 400);
  
  //At this point, I am loading the song to be played on the page, as well as creating buttons and sliders that will be used as controls for the song. 
  song = loadSound("bensound-dubstep.mp3");
  button = createButton("Play");
  slider = createSlider(0, 1, 0.5, 0.01);
  slider2= createSlider(0, 2, 1, 0.01);
  
  //Here I am loading my image and video that will be displayed on the page.
  img = loadImage('codingbathroom1.jpg');
  headbang = createVideo(['headbanging1.mp4']);
  headbang.hide();
  
  //Here I tell the computer what to do when I hit the play button.
  button.mousePressed(togglePlay);
  song.setVolume(0.3);
  
  print("Left slider = Volume");
  print ("Right slider = Rate");
  print ('Press any key to headbang');
}

//Here I command the button to say "play" or "pause", depending if the song is playing or not.
function togglePlay() {
  if (!song.isPlaying()){
  song.play();
  button.html("Pause");
} else {
  song.pause();
  button.html("Play");
}
}

function draw() {

  //The sliders are assigned their duties.
  song.setVolume(slider.value());
  song.rate(slider2.value());
  
  image(img,-50,0);
  
  
  //The border for the mirror and picture
  fill(50);
  rect(30,30,250,340);
  rect(330,30,245,190);
 
  //The position of the video. It was too big to fit on the canvas I made, so I has to scale it down.
  push();
  scale(0.35);
  image(headbang,975,120);
  pop();
  
  //The "default" mirror color
  fill(200);
  rect(40,40,230,320);
  
  //This line of code changes the mirror color at 5 seconds. The lines after continute to change the color for up to 56 seconds, when it changes back to the original mirror color. It also brings in text when the mirror color changes.
  push();  
  if (song.currentTime() > 5) {
  fill(255,0,0);  
  rect(40,40,230,320);
  textSize(40);
  fill(0);
  text('DUBSTEP',360,300);
  textSize(50);
  text('MIRROR',350,360);
  pop();
  }
  
  push();  
  if (song.currentTime() > 8) {
  fill(0,255,0);  
  rect(40,40,230,320);
  pop();
  }
  
   push();  
  if (song.currentTime() >11) {
  fill(0,0,255);  
  rect(40,40,230,320);
  pop();
  }
 
   push();  
  if (song.currentTime() > 14) {
  fill(255,0,0);  
  rect(40,40,230,320);
  pop();
  }
  
 push();  
  if (song.currentTime() > 17) {
  fill(0,255,0);  
  rect(40,40,230,320);
  pop();
  }
  
   push();  
  if (song.currentTime() >20) {
  fill(0,0,255);  
  rect(40,40,230,320);
  pop();
  }
  
  
    push();  
  if (song.currentTime() > 23) {
  fill(255,0,0);  
  rect(40,40,230,320);
  pop();
  }
  
 push();  
  if (song.currentTime() > 26) {
  fill(0,255,0);  
  rect(40,40,230,320);
  pop();
  }
  
   push();  
  if (song.currentTime() >29) {
  fill(0,0,255);  
  rect(40,40,230,320);
  pop();
  }
  
    push();  
  if (song.currentTime() > 32) {
  fill(0,255,0);  
  rect(40,40,230,320);
  pop();
  }
  
   push();  
  if (song.currentTime() >35) {
  fill(0,0,255);  
  rect(40,40,230,320);
  pop();
  }
 
   push();  
  if (song.currentTime() > 38) {
  fill(255,0,0);  
  rect(40,40,230,320);
  pop();
  }
  
 push();  
  if (song.currentTime() > 41) {
  fill(0,255,0);  
  rect(40,40,230,320);
  pop();
  }
  
   push();  
  if (song.currentTime() >44) {
  fill(0,0,255);  
  rect(40,40,230,320);
  pop();
  }
  
  
    push();  
  if (song.currentTime() > 47) {
  fill(255,0,0);  
  rect(40,40,230,320);
  pop();
  }
  
 push();  
  if (song.currentTime() > 50) {
  fill(0,255,0);  
  rect(40,40,230,320);
  pop();
  }
  
   push();  
  if (song.currentTime() >53) {
  fill(0,0,255);  
  rect(40,40,230,320);
  pop();
  }
 
  push();  
  if (song.currentTime() >56) {
  fill(200);  
  rect(40,40,230,320);
  pop();
  }
  
}

//This keeps the video looping after a key is pressed and the video plays.
  function keyPressed() {
    headbang.loop();
  }