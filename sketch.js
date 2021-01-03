
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof,rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,40,700,10);

	bob1=new Bob(200,220,40);

	bob1.shapeColor="blue";

	bob2=new Bob(500,200,40);

    bob2.shapeColor="blue";

	bob3=new Bob(600,200,40);

	bob3.shapeColor="blue";

	bob4=new Bob(700,200,40);

	bob4.shapeColor="blue";

	bob5=new Bob(100,200,40);

	bob5.shapeColor="blue";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}



