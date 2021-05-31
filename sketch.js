const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var bgImg;

function preload() {
//preload the images here
  bgImg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2-150,380,1100,10);

  superman = new SuperMan(300,270,70);

  rope = new Rope(superman.body,{x:300,y:30});

  enemy = new Monster(930,300,50);

  block1 = new Box(550,350);
  block2 = new Box(550,310);
  block3 = new Box(550,270);
  block4 = new Box(550,230);
  block5 = new Box(550,190);
  block6 = new Box(550,150);

  block7 = new Box(610,350);
  block8 = new Box(610,310);
  block9 = new Box(610,270);
  block10 = new Box(610,230);
  block11 = new Box(610,190);
  block12 = new Box(610,150);
  block13 = new Box(610,110);

  block14 = new Box(670,350);
  block15 = new Box(670,310);
  block16 = new Box(670,270);
  block17 = new Box(670,230);
  block18 = new Box(670,190);
  block19 = new Box(670,150);
 
  block20 = new Box(730,350);
  block21 = new Box(730,310);
  block22 = new Box(730,270);
  block23 = new Box(730,230);
  block24 = new Box(730,190);
  block25 = new Box(730,150);
  block26 = new Box(730,110);
  block27 = new Box(730,70);
  
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  superman.display();

  rope.display();

  ground.display();

  enemy.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();

  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();

  /*detectCollision(block1,enemy);
  detectCollision(block2,enemy);
  detectCollision(block3,enemy);
  detectCollision(block4,enemy);
  detectCollision(block5,enemy);
  detectCollision(block6,enemy);
  detectCollision(block7,enemy);
  detectCollision(block8,enemy);
  detectCollision(block9,enemy);
  detectCollision(block10,enemy);
  detectCollision(block11,enemy);
  detectCollision(block12,enemy);
  detectCollision(block13,enemy);
  detectCollision(block14,enemy);
  detectCollision(block15,enemy);
  detectCollision(block16,enemy);
  detectCollision(block17,enemy);
  detectCollision(block18,enemy);
  detectCollision(block19,enemy);
  detectCollision(block20,enemy);
  detectCollision(block21,enemy);
  detectCollision(block22,enemy);
  detectCollision(block23,enemy);
  detectCollision(block24,enemy);
  detectCollision(block25,enemy);
  detectCollision(block26,enemy);
  detectCollision(block27,enemy);*/

  

}

function mouseDragged(){
  Body.setPosition(superman.body,{x:mouseX, y:mouseY});
}

/*function detectCollision(bodyA,bodyB){
  var posA = bodyA.body.position;
  var posB = bodyB.body.position;
  if(posA.x - posB.x === bodyA.width/2 + bodyB.radius ||
    posA.y - posB.y === bodyA.height/2 + bodyB.radius ||
    posB.x - posA.x === bodyB.radius + bodyA.width/2 ||
    posB.y - posA.y === bodyB.radius + bodyA.height/2){
      Body.setStatic(bodyB.body,false);
    }
}*/

/*function mouseReleased(){
  rope.fly();
}*/

