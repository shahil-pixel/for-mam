
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;

var bob1, bob2, bob3, bob4, bob5;
var ground;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new Bob(560,550,70);
    bob2 = new Bob(630,550,70);
    bob3 = new Bob(700,550,70);
	bob4 = new Bob(770,550,70);
	bob5 = new Bob(840,550,70);

	roof = new Roof(700,200,500,50)

    rope1 = new Rope(bob1.body,roof.body,-BobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Grey");
    bob1.display(); 
    bob2.display();  
    bob3.display();  
	bob4.display(); 
	bob5.display();
	
	roof.display();

	rope1.display();

  drawSprites();
 
}



