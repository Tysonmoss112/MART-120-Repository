var x = 100;
var y = 100;
var x2 = 100;
var y2 = 100;
var big = 32;

var x_movement;
var y_movement;
var x2_movement;
var y2_movement;
var size;

function setup()
{
	createCanvas(500, 500);
	x_movement = Math.floor(Math.random() * 20);
	y_movement = Math.floor(Math.random() * 20);
	x2_movement = Math.floor(Math.random() * 30);
	y2_movement = Math.floor(Math.random() * 30);
	size = 32;
}

function draw()
   {
	background(163,144,160);
	fill(225,199,150)
	noStroke()
	triangle(x,y,200,80,320,90);
	rect(200,y,100,150);	
	ellipse(x,180,175,250);
	circle(x2,200,200);
	stroke(94,48,8);
	fill(94,48,8);
	triangle(140,110,160,275,200,110);
	triangle(300,110,355,275,355,110); // outer triangles

	triangle(150,110,215,125,220,90); //left tri
	triangle(280,90,300,125,350,110); // right tri

	triangle(200,70,250,150,300,70); //center
	triangle(200,70,250,40,300,70); //top center

	triangle(140,110,225,115,200,70);
	triangle(300,70,275,115,355,110);// l + r top triangles
	
	stroke('black');
	fill('white')
	ellipse(x,y,25,15);
	ellipse(x,y,25,15);
	fill('black');
	circle(x,y,15);
	circle(x,y,15); // Eyes

	line(215,y2,290,y2);

	textSize(big);
	text('My Portrait', 30,50);
	text('Tyson Maus',300,450);
	
	if (x >= 500 || x <= 0) {
	   x_movement *= -1;
	}
	if (y >= 500 || y <= 0) {
	   y_movement *= -1;
	}
	if (big >= 160 || big <= 0) {
	   size *= -1;
	}
	if (x2 >= 500 || x2 <= 0) {
	   x2_movement *= -1;
	}
	if (y2 >= 500 || y2 <= 0) {
	   y2_movement *= -1;
	}

x += x_movement;
y += y_movement;
x2 += x2_movement;
y2 += y2_movement;
big += size;
}