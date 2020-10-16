var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options1;
var switchcase1="false";

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	if (switchcase1==="false"){
		options1={restitution:0.8,isStatic:true};
	}
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,options1);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	

	box=new Box(300,620,20,100);
	box2=new Box(450,620,20,100);
	box3=new Box(380,650,150,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  box.display();
  box2.display();
  box3.display();
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
  console.log(switchcase1);
 keyPressed();
 
}
function keyPressed() {
 if (keyCode===DOWN_ARROW) {
	 switchcase1="true";
	if (switchcase1==="true"){
		Matter.Body.setStatic(packageBody,false);

	}
  }
}
