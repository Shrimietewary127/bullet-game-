var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  car=createSprite(500, 200, 50, 50);
  wall=createSprite(1200,200,thicknesss,200);
  wall.shapeColor= color(80,80,80);
  weight=random(30,52);
  car.velocityX=random(223,321); 
speed=car.velocityX;
thickness=random(22,83);
}

function draw() {
  background(0);  
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight * speed* speed/(thickness*thickness*thickness);

    if(damage>10){
      car.shapeColor=color(255,0,0);
    
    }
    
    if(deformation<10 ){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hascollided (bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){

  return true; 
}
return false;


}