var paper,ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
 
  createCanvas(1400,700)
	


	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);

   
  

	
  
}


function draw() {
 backround(100)
  
  Engine.update(engine);
 
 
}
















































