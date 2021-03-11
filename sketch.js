const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground1

function setup() {
  world = engine.world
  engine = engine.create()
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground1 = new Ground(50,700,600,20)
}

function draw() {
  engine.update(engine)
  background(255,255,255);  
  drawSprites();
}