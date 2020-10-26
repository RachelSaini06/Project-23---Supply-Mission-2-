var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
var red1, red2, red3;
var red1Sprite, red2Sprite, red3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//creating the red box visual
	red1Sprite = createSprite(width/2, height-45, 200, 20);
	red1Sprite.shapeColor = color(255, 0, 0);

	red2Sprite = createSprite(red1Sprite.x - 100, height-85, 20, 100);
	red2Sprite.shapeColor = color(255, 0, 0);

	red3Sprite = createSprite(red1Sprite.x + 100, height-85, 20, 100);
	red3Sprite.shapeColor = color(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	//creating the bodies of the red box
	red1 = Bodies.rectangle(width/2, 645, 200, 20, {isStatic: true});
	World.add(world, red1);

	red2 = Bodies.rectangle(red1.x - 100, 605, 20, 100, {isStatic: true});
	World.add(world, red2);

	red3 = Bodies.rectangle(red1.x + 100, 605, 20, 100, {isStatic: true});
	World.add(world, red3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

//making the package drop when the down arrow key is pressed
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
  }
}
