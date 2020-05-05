const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,friend1,friend2;
var bgImg,platform;
var me, slingshot;

var gameState = "onSling";

var score = 0;

function preload() {
   bgImg  = loadImage("bg.png");
  
}

function setup(){
  var canvas = createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
platform = new Ground(150,305,300,180);

box1 = new Box(600,320,70,70);
box3= new Box(920,320,70,70);
friend1 = new Friend(700,350);

box2 = new Box(600,240,70,70);
box4 = new Box(920,240,70,70);
friend2 = new Friend2(780,350);


 
//box5 = new Box(810,160,70,70);

me = new Me(200,50);

slingshot = new SlingShot(me.body,{x:200, y:50});
}
 
function draw(){
       background(bgImg);
  
       noStroke();
       textSize(35)
       fill("black")
       text("Score  " + score, width-300, 50)
  
   Engine.update(engine);
  
   box1.display();
   box2.display();
   ground.display();
   friend1.display();
   friend1.score();
   
 
   box3.display();
   box4.display();
   friend2.display();
   friend2.score();
   
 
   //box5.display();
  
 
   me.display();
   platform.display();
   
   slingshot.display();   
}
 
function mouseDragged(){
 Matter.Body.setPosition(me.body, {x: mouseX , y: mouseY});

}
 
 
function mouseReleased(){
   slingshot.fly();
   gameState = "launched";
}
 
function keyPressed(){
   if(keyCode === 32){
      slingshot.attach(me.body);
      me.trajectory= []
      Matter.Body.setPosition(me.body, {x:200 ,y:50 });
   }
}
 
