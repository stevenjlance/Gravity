var ball

var ballInfo = {
	x: 200,
	y: 0,
	width: 20,
	height: 20,
	speedY: 0,
	acceleration: 1,
}

function preload(){
	ball = loadImage("SoccerBall.png")
}

function setup() {
  createCanvas(500, 400)
	
}

function draw() {
  background(255)
	fill("green")
	rect(0, 380, width, 20)
	image(ball, ballInfo.x, ballInfo.y, ballInfo.width, ballInfo.height)
	// Get the ball to accelearte as it falls
	
	

	// LEVEL 1: Stop the ball when it hits the group
	
	



	// LEVEL 2: Get the ball to bounce when it hits the ground
	
	

	
	
}