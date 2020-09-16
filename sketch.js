//1.define physics engine
const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 

//2.create local obejcts for physics engine.
var engine, world, ground; 
var ball; 
function setup() {
  
  //3.duties to local objects. 
  engine = Engine.create();
  world = engine.world; 
  
  createCanvas(400,400);
  
  //creating components through bodies
  //5.0 define physics/options for the component in the body 
    var ground_options={
      isStatic : true
    } 

  //5.1 Creating physics for he body
  ground  = Bodies.rectangle (200,390,400,20,ground_options);


  //5.2 adding components into the World.
  World.add(world,ground);

  var ball_options={
    restitution : 1.0
  }

  ball = Bodies.circle(200,200,20,ball_options);

  World.add(world,ball);
  //createSprite(400, 200, 50, 50);
}

function draw() {

  
  background(0);  

  //4.updating the Engine with engine. 
  Engine.update(engine);

  //6.displaying the ground. 
  rectMode(CENTER);
  fill ("green");
  stroke ("yellow");
  strokeWeight(3);
  rect(ground.position.x, ground.position.y, 400,20);



  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}