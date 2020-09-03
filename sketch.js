var boss,bossImg,caveImg
function preload(){
  caveImg=loadImage("HGSS_Dark_Cave-Route_45-Day.png")
  bossImg=loadImage("front_20-_20on_1_1.png")
}
function setup() {
  createCanvas(800,400);
 boss=createSprite(20,20,20,20);
 boss.addImage(bossImg)
 boss.scale=0.1
 line=createSprite(400,330,550,6)
 line1=createSprite(400,270,550,6)
}

function draw() {
  background(caveImg);  
 spawnball();
  drawSprites();
}
function spawnball(){
  if(frameCount%60===0){
    var ball=createSprite(random(20,600),0,20,20)
    ball.velocityY=2
  }
}