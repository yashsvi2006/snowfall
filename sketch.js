const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;




var snow=[];
function preload(){

  bg=loadImage("snow1.jpg");

}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
   Engine.update(engine);
  if(frameCount%5===0){
    snow.push(new Snow(random(0,800),10,30));
  }
  for(var j=0;j<snow.length;j++){
    snow[j].display;
  }
  drawSprites();
}