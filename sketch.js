function preload() {
  backgroundImg = loadImage("snow3.jpg");
  snowimg = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);

  snowfall();
  drawSprites();
}

function snowfall(){
  if (frameCount%30===0){
  var snows = createSprite (Math.round(random(50,750)),0,500,500);
  snows.addImage(snowimg);
  snows.velocityY=2;
  snows.scale=0.1;
  snows.lifetime=750;
  }
}