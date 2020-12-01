var bullet,wall;
var speed,weight, thickness;

function setup() {
  createCanvas(400,1600);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,thickness/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
}

function draw() {
  background("black");  
  drawSprites();
  car.velocityX=speed;

if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
if(hascollided(bullet,wall)){
var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/ThicknessofWall*ThicknessofWall*ThicknessofWall
if(damage>10){
car.shapeColor=("red");
}
if(damage<10){
  car.shapeColor=("green");
}

}
}
}
