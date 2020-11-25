const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
var engine,world;
var ground;
var ball,rope,ball2,ball3,bal4,ball5,rope2,rope3,rope4,rope5;

function setup(){
  canvas = createCanvas(800, 800);

  engine = Engine.create();
 world = engine.world;

 let canvasmouse = Mouse.create(canvas.elt);
 canvasmouse.pixelRatio = pixelDensity();
 let options ={
     mouse:canvasmouse
 };
 mConstraint = MouseConstraint.create(engine, options);
 World.add(world, mConstraint);
 
  ground = new Ground(600,600,1200,20);
  


  ball = new Ball(200,200,80,80);
  rope  = new Rope(ball.body,{x:300,y:50});

  ball2 = new Ball(200,200,80,80);
  rope2 = new Rope(ball2.body,{x:370,y:50});

  ball3 = new Ball(200,200,80,80);
  rope3  = new Rope(ball3.body,{x:440,y:50});

  ball4 = new Ball(200,200,80,80);
  rope4  = new Rope(ball4.body,{x:510,y:50});
  ball5 = new Ball(200,200,80,80);
  rope5  = new Rope(ball5.body,{x:580,y:50});
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

   ground.display();
  

ball.display();
rope.display();
ball2.display();
rope2.display();

ball3.display();
rope3.display();
ball4.display();
rope4.display();

ball5.display();
rope5.display();

}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

