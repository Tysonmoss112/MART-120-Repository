function setup()
{
	createCanvas(500, 500);
}
function draw()
{
	background(163,144,160);
	fill(225,199,150)
	noStroke()
	triangle(180,330,250,220,320,330);
	rect(200,180,100,150);	
	ellipse(250,180,175,250);
	circle(250,175,200);
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
	ellipse(215,170,25,15);
	ellipse(290,170,25,15);
	fill('black');
	circle(215,170,15);
	circle(290,170,15); // Eyes

	line(215,225,290,225);

	textSize(32);
	text('My Portrait', 30,50)
	text('Tyson Maus',300,450)
	
}