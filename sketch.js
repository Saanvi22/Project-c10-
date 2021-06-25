var sea 
var ship 
function preload(){
  seaImg=loadImage("sea.png"); 
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png"); 
  
  } 


function setup(){
  createCanvas(400,400);

  sea = createSprite(400,200); 
  sea.addImage(seaImg); 
  sea.velocityX = -2 
  sea.scale = 0.3

  ship = createSprite(120,180,10,10)
  ship.addAnimation("jqa",shipImg1); 
  ship.scale = 0.3; 
  
  

} 

function draw() {
  background("blue"); 
  if(sea.x < 0){
    sea.x = sea.width/2; 
  } 

 drawSprites(); 
}



