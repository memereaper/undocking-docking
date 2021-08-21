var hasDocked = false;
var iss,spaceCraft,issAnimation,spaceCraftImg,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3;
var backgroundimg;
var realiss;

function preload() {
  backgroundimg = loadImage("spacebg.jpg")
  issAnimation = loadImage("iss.png")
  spaceCraftImg = loadImage("spacecraft1.png")
  spaceCraftImg1 = loadImage("spacecraft2.png")
  spaceCraftImg2 = loadImage("spacecraft3.png")
  spaceCraftImg3 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(1000,800);
  iss = createSprite(200, 100, 50, 50);
  iss.addImage(issAnimation)
  iss.scale = 0.5;

  realiss = createSprite(150,100,20,20)
  realiss.visible = false;

  spaceCraft = createSprite(600, 700, 50, 50);
  spaceCraft.addImage(spaceCraftImg)
  spaceCraft.scale = .2;
}

function draw() {
  background(backgroundimg); 
  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
      spaceCraft.x = spaceCraft.x - 10;
      spaceCraft.addImage(spaceCraftImg3)
    }

    if(keyDown(RIGHT_ARROW)){
      spaceCraft.x = spaceCraft.x + 10;
      spaceCraft.addImage(spaceCraftImg2)
    }

    if(keyDown(UP_ARROW)){
      spaceCraft.y = spaceCraft.y - 10;
      spaceCraft.addImage(spaceCraftImg1)
    }

    if(!keyDown(UP_ARROW)&& !keyDown(LEFT_ARROW)&& !keyDown(UP_ARROW)){
      spaceCraft.addImage(spaceCraftImg)
    }

    if(spaceCraft.isTouching(realiss)){
      hasDocked = true;
    }
    
  }

  if(hasDocked){
    text("Docking Succesful",500,400)
  }
  drawSprites();
}