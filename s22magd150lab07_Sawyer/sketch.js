let rain; 

//this is the array I made for the program to refrence at later points. 
var nums = [100,200,250,370,550,600];

function setup() {
  createCanvas(600, 400);
  
  //Here I create the size and location of the raindrops. I was able to use array numbers for a few.
  rain1 = new Rain(nums[1],120,20);
  rain2 = new Rain(300,120,30);
  rain3 = new Rain(nums[0], 60, 30);
  rain4 = new Rain(150, 90, 16);
  rain5 = new Rain(380, 100, 23);
  rain6 = new Rain (440,80,16);
  rain7 = new Rain (460, 50, 13);
  rain8 = new Rain (520, 40, 25);
  rain9 = new Rain (225,130, 15);
  rain10 = new Rain (70, 35, 15);

}

function draw() {
  background(220);
 
  
  //here I call numbers in the array I made in order to construct the cloud. A few numbers needed to be adjusted, so I used some simple math to get them in the correct position.
  push();
  fill(nums[1]);
  ellipse(nums[0]+10,0,nums[0]);
  ellipse(nums[2], 0, nums[2]);
  ellipse (nums[3], 0, nums[1]);
  ellipse(nums[4]-70,0,nums[0]);
  pop();
  
  //This is where the program executes the commands I made for the rain class. It is combining the location data I defined in the setup and color/movement I defined in the Rain class itself.
  rain1.show1();
    rain1.move();
  rain2.show();
    rain2.move1();
  rain3.show1();
    rain3.move();
  rain4.show();
    rain4.move2();
  rain5.show1();
    rain5.move2();
  rain6.show();
    rain6.move();
  rain7.show1();
    rain7.move2();
  rain8.show();
    rain8.move1();
  rain9.show();
    rain9.move();
  rain10.show1();
    rain10.move2();
  
  //I added this text at the bottom as a caption, and positioned it in the corner.
  text(["April Showers!"],515,395); 
}

//This is the class I created for rain. 
class Rain {
  constructor(x,y,r) {
    this.x = x;
    this.y = y; 
    this.r = r;
  }
  
  //this is the appearance of the rain droplet 1. I used 2 different colors to make the rain droplets appear different.
  show(){
    noStroke();
    fill(0,0,255);
    ellipse(this.x,this.y,this.r);
  }
  
  //this is the appearance of rain droplet 2.
  show1(){
    noStroke();
    fill(0,100,220);
    ellipse(this.x,this.y,this.r);
  }
  // this is my instruction for "rain" to move. I used 3 different commands to get droplets to move at different speeds.
  move(){
  this.y = this.y + 3;  
  }
  
  //This is speed command variation 2.
  move1(){
    this.y = this.y + 2;
  }
  
  //This is speed command variation 3.
  move2(){
    this.y = this.y + 1.5;
  }
  
  
  
}
