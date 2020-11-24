var wall,thickness,bullet,speed,weight,d,lbullet,lwall;



function setup() {
  createCanvas(1200,400);
 wall=createSprite(1000, 200, thickness, height/2);
bullet=createSprite(0,200,20,20);
bullet.shapeColor="white";
speed=random(223,321);
thickness=random(22,83);
weight=random(30,52);
bullet.velocityX=speed;
}

function draw() {
  background(0);  
  drawSprites();
  if(hasCollided(bullet,wall))
  {
   bullet.velocityX=0;
  d=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(d>10){
  wall.shapeColor="red";
}
 else 
 if(d<10){
  wall.shapeColor="green";}

 
}
  }





function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}