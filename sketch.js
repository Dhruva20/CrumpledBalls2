
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dustbin;


function preload(){
dustbin = loadImage("dustbingreen.png");
}



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,600,40);
	
	ground = new Ground(400,690,800,20);

    leftSide = new Dustbin(545,605,20,150);
	bottom = new Dustbin(610,670,115,20);
	rightSide = new Dustbin(675,605,20,150);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  imageMode(CENTER);
  image(dustbin,610,600,160,200);
  paper.display(); 
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();
  
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-70})
	}
}



