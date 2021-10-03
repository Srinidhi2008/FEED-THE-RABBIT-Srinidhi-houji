var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;
// var leavesGroup,applesGroup;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg,"rabbit");
 

//applesGroup = new Group()
//leavesGroup = new Group()
}

function draw() {
  //background(garden);
  //textSize(50);
//text("Points: " + count,60,75);

  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  //if (rabbit.collide(apple)) {
    //apple.destroy();
  //count = count + 1;
  //  if (rabbit.displace(leaf)) {
   //   games
  //  }

// if (gameState===PLAY){
//   apple.velocityY = 3
//   leaf.velocityY = 3
// }

  // spawnApples();
  // spawnLeaves();
  //applesGroup.setVelocityXEach(0)
//leavesGroup.setVelocityXEach(0)

var select_sprites = Math.round(random(1,2));
if (frameCount % 30 == 0){
  if (select_sprites == 1) {
     spawnApples()
  }
  else {
   spawnLeaves()
  }
}

  drawSprites();
}


function spawnApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.y = Math.round(random(1,2));
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 6;
  apple.lifetime=80;
  // applesGroup.add(apple)
}

function spawnLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.y = Math.round(random(1,2));
  leaf.addImage(leafImg);
  leaf.scale = 0.1;
  leaf.velocityY = 6;
  leaf.lifetime=80;
  // leavesGroup.add(leaf)
}


