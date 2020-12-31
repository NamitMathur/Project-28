
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg,ground,treeImg,stone;
var sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
	boyImg=loadImage("boy.png");
	treeImg=loadImage("tree.png");
}


function setup(){
	var canvas=createCanvas(1500,700)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(750,700,1510,100);

	stone=new Stone(170,500,70,70);

	sling=new SlingShot(stone.body,{x:150,y:490});

	mango1=new Mango(1200,380,50);
	mango2=new Mango(1150,320,60);
	mango3=new Mango(1280,330,50);
	mango4=new Mango(1240,200,60);
	mango5=new Mango(1340,340,50);
	mango6=new Mango(1360,290,60);
	mango7=new Mango(1280,220,50);
	mango8=new Mango(1800,270,60);
	mango9=new Mango(1200,280,50);
	mango10=new Mango(1100,270,60);

	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background("lightgrey");
	
  
  imageMode(CENTER);
  image(boyImg,230,570,260,340);
  image(treeImg,1200,405,500,530);

  ground.display();
  stone.display();
  sling.display();	

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);



  drawSprites();
  textSize(30);
  fill("grey");
  strokeWeight(1);
  stroke("grey");
  text("Press Space to get a second try",20,30);
 
}
function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	sling.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyposition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyposition.x,mangoBodyposition.y);
	if(distance<=lmango.r+lstone.width/2){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
  if(keyCode===32){
    Body.setPosition(stone.body,{x:170,y:500});
    sling.attach();
  }
}
