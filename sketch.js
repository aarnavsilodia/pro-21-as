
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj,leftSide,RightSide;

function preload()
{
	
}

function setup() {
	createCanvas(750, 1500);

	groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,600,20,120)
	RightSide = new Ground(1100,600,20,120)

	engine = Engine.create();
	world = engine.world;

	var ball_options ={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(0,200,50,ball_options)
	World.add(ball,world)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  
  drawSprites();
 
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0.15})
}



