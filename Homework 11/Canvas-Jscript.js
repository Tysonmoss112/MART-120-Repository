var chr_x = 100;
var chr_y = 500;
var chr_speed = 8;
var mouse_x = 0;
var mouse_y = 0;
isClicked = false;
var x_move = Math.floor(Math.random() * 1100);
var y_move = Math.floor(Math.random() * 400);
var x2_move = Math.floor(Math.random() * 1100);
var y2_move = Math.floor(Math.random() * 400);;
var x_movement;
var y_movement;
var x2_movement;
var y2_movement;

function setup() {

createCanvas(1520,685);
x_movement = Math.floor(Math.random() * 10);
y_movement = Math.floor(Math.random() * 10);
x2_movement = Math.floor(Math.random() * 12);
y2_movement = Math.floor(Math.random() * 12);


}
function draw() {

background(38,148,28);
fill(42,90,181);
strokeWeight(2);
rect(chr_x,chr_y,50,60); //Player
fill(22,240,189)
rect(1450,230,60,90) // door
fill(240,36,22);
circle(x_move,y_move,100);
circle(x2_move,y2_move,150);

x_move += x_movement;
y_move += y_movement;
x2_move += x2_movement;
y2_move += y2_movement;

   if (x_move <= 0 ) {
	x_move = 1520;
	}
   else if (x_move >= 1520) {
	x_move = 0;
	}
   if (y_move <= 0) {
	y_move = 685;
	}
   else if (y_move >= 685) {
	y_move = 0;
	}			// first circle

   if (x2_move <= 0 ) {
	x2_move = 1520;
	}
   else if (x2_move >= 1520) {
	x2_move = 0;
	}
   if (y2_move <= 0) {
	y2_move = 685;
	}
   else if (y2_move >= 685) {
	y2_move = 0;
	}			// second circle
				//player events
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

  if (dist(chr_x,chr_y,1450,230) < 30 && dist(chr_x,chr_y,1510,320) < 120) {
	textSize(32);
	text('You Won!', 1350,200);
  }
  // Could not create single shape on mouse click because draw() function redraws over it, therfore not appearing at all
}