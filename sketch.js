const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;
var walkingAnimation;


var engine, world;

var rand;

var drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,drop10;

var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    walkingAnimation=loadAnimation("Walking Frame/batman.png",
            "Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png",
            "Walking Frame/walking_4.png", "Walking Frame/walking_5.png","Walking Frame/walking_6.png",
            "Walking Frame/walking_7.png","Walking Frame/walking_8.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //create drops
   drop1=new Drops(round(random(10,680)),round(random(20,400)));
   drop2=new Drops(round(random(10,680)),round(random(20,400)));
   drop3=new Drops(round(random(10,680)),round(random(20,400)));
   drop4=new Drops(round(random(10,680)),round(random(20,400)));
   drop5=new Drops(round(random(10,680)),round(random(20,400)));
   drop6=new Drops(round(random(10,680)),round(random(20,400)));
   drop7=new Drops(round(random(10,680)),round(random(20,400)));
   drop8=new Drops(round(random(10,680)),round(random(20,400)));
   drop9=new Drops(round(random(10,680)),round(random(20,400)));
   drop10=new Drops(round(random(10,680)),round(random(20,400)));

    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }
    

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    //display rain drops
   drop1.display();
   drop2.display();
   drop3.display();
   drop4.display();
   drop5.display();
   drop6.display();
   drop7.display();
   drop8.display();
   drop9.display();
   drop10.display();

    drawSprites();
}   

