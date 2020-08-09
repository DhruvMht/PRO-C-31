const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var particle=[];
var plinko=[];
var division=[];

var divisionHeight = 300;

function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(400,680,800,20,{isStatic:true})
  World.add(world, ground);

  for(var k = 0; k <=width; k = k+80) {
    division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<=width; j=j+50) {
    plinko.push(new Plinko(j, 75));  
  }
  for(var j = 15; j<=width; j=j+50) {
    plinko.push(new Plinko(j, 175));  
  }
  for(var j = 40; j<=width; j=j+50) {
    plinko.push(new Plinko(j, 275));  
  }
  for(var j = 15; j<=width; j=j+50) {
    plinko.push(new Plinko(j, 375));  
  }
}

function draw() {
  background(0);  

  Engine.update(engine)

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20)

  if(frameCount%60===0) {
    particle.push(new Particle(random(100,700),10,10));
  }
 
  for(var j = 0; j < particle.length; j++) {
    particle[j].display();
  }

  for(var k = 0; k < division.length; k++) {
    division[k].display();
  }

  for(var i = 0; i < plinko.length; i++) {
    plinko[i].display();
  }

  drawSprites();
}