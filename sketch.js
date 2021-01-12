
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,ground,pila,rock,sling1;
var mgo1,mgo2,mgo3,mgo4,mgo5,mgo6,mgo7,mgo8,mgo9,mgo10,mgo11,mgo12;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(900,780,1800,20);

	tree = new Tree(1500,500,600,600);

	pila = new Boy(500,680,400,400);

	rock = new stone(180,605,30);

	sling1 = new Slingshot(rock.body,{x:390,y:590});

    mgo1 = new Mango(1500,400,30,30);
    mgo2 = new Mango(1400,350,30,30);
    mgo3 = new Mango(1450,300,30,30);
    mgo4 = new Mango(1550,450,30,30);
    mgo5 = new Mango(1600,430,30,30);
    mgo6 = new Mango(1650,470,30,30);
    mgo7 = new Mango(1350,420,30,30);
    mgo8 = new Mango(1420,470,30,30);
    mgo9 = new Mango(1570,350,30,30);
    mgo10 = new Mango(1700,400,30,30);
    mgo11 = new Mango(1670,350,30,30);
    mgo12 = new Mango(1520,300,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ground.display();
  tree.display();
  pila.display();
  rock.display();
  sling1.display();

  mgo1.display();
  mgo2.display();
  mgo3.display();
  mgo4.display();
  mgo5.display();
  mgo6.display();
  mgo7.display();
  mgo8.display();
  mgo9.display();
  mgo10.display();
  mgo11.display();
  mgo12.display();
  
  detectollision(stone,mgo1);
  detectollision(stone,mgo2);
  detectollision(stone,mgo3);
  detectollision(stone,mgo4);
  detectollision(stone,mgo5);
  detectollision(stone,mgo6);
  detectollision(stone,mgo7);
  detectollision(stone,mgo8);
  detectollision(stone,mgo9);
  detectollision(stone,mgo10);
  detectollision(stone,mgo11);
  detectollision(stone,mgo12);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
    if(key === 32){
        Matter.Body.setPosition(rock.body,{x:235,y:420})
        sling1.attach(rock.body);
    }
}

function detectollision(stone,Mango){

  MangoBodyPosition=Mango.body.position
  rockBodyPosition=rock.body.position
  
  var distance=dist(rockBodyPosition.x,rockBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
  	if(distance<=Mango.r+rock.r)
    {
  	  Matter.Body.setStatic(Mango.body,false);
    }

  }