var chr_x = 100;
var chr_y = 500;
var chr_speed = 8;

var circleX = -50;
var circleY = -50;

var myXs = [];
var myYs = [];
var myDiam = [];
var x_speed = [];
var y_speed = [];   // size values

var myR = [];
var myG = [];
var myB = [];	// RGB values

function getRandomNumber(max) {
   return Math.floor(Math.random() * max);
}

function setup() {

createCanvas(1520,685);

   for(var i = 0; i < 5; i++)  {
	myXs[i] = getRandomNumber(500);
	myYs[i] = getRandomNumber(500);
	myDiam[i] = getRandomNumber(150);
	x_speed[i] = getRandomNumber(15);
	y_speed[i] = getRandomNumber(15);
	myR[i] = getRandomNumber(300)
	myG[i] = getRandomNumber(300)
	myB[i] = getRandomNumber(300)  // gets all ball values
   }
}

function scene() {
background(38,148,28); // Background
fill(42,90,181);
strokeWeight(2);
rect(chr_x,chr_y,50,60); // player
fill(22,240,189)
rect(1450,230,60,90) // door

   if (dist(chr_x,chr_y,1450,230) < 30 && dist(chr_x,chr_y,1510,320) < 120) {
	fill(255,0,0)
	textSize(32);
	text('You Won!', 1350,200);  }	// Win condition
}
function chr_movement() { // Movement for player
  if (keyIsDown(87)) {
	chr_y -= chr_speed;
  }
  else if (keyIsDown(83)) {
	chr_y += chr_speed;
  }
  else if (keyIsDown(65)) {
 	chr_x -= chr_speed;
  }
  else if (keyIsDown(68)) {
 	chr_x += chr_speed;
  }
}

function mouse_circle() {
   mouseobstacle(circleX,circleY,30); //mouse circle
}

function add_obstacle() { //adds red circles
for(var i = 0; i < myXs.length; i++) {
   fill(myR[i],myG[i],myB[i]);
   circle(myXs[i],myYs[i],myDiam[i]);  //draws circles in range of array

   if (myXs[i] <= 0 ) {		//makes all circles come back from other side
	myXs[i] = 1520;  }

   else if (myXs[i] >= 1520) {
	myXs[i] = 0;  }

   if (myYs[i] <= 0) {
	myYs[i] = 685;  }

   else if (myYs[i] >= 685) {
	myYs[i] = 0;  }
				
	myXs[i] += x_speed[i];	//makes all balls move based on set speed
	myYs[i] += y_speed[i];
}
}

function draw() {  // calling all functions
scene()
chr_movement()
add_obstacle()
mouse_circle()
}
   function mouseClicked() {
	circleX = mouseX;
	circleY = mouseY;
	}
   function mouseobstacle(x,y,size) {
	fill(255,0,0);
	circle(x,y,size);
	}
// Managed to work out mouse function, Is there a way to optimize this further?
// also combined some functions to lessen code wordiness
