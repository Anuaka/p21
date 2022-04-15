  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";
var score;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup = new Group();
}

function setup() {
  createCanvas(600,600);
   tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  doorsGroup = new Group();
  climbersGroup = new Group();
  
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(0);
  
 if(tower.y > 400 ){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left arrow")){
      ghost.x = ghost.x -3;
    }
      // write a code to move left when left arrow is pressed
    
    if(keyDown("right arrow")){
  
          ghost.x = ghost.x  +3;
    }
      // write a code to move left when right arrow is pressed
      
    
    if(keyDown("space")){
  
         ghost.velocityY = -5;
    }
      // write a code to move up when space arrow is pressed
      
    
   ghost.velocityY = ghost.velocityY + 0.8;
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY= 0;
  }
  
   
      //write a condition for infinte scrolling tower
      tower.velocityY = -(6 + 3*score/100);
      if (tower.y < 0){
        tower.y = tower.width/2;
        tower.velocityY = 5;
      }
      spawnDoors();
      drawSprites();
  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
    
    if(invisibleBlockGroup.isTouching(ghost)) {
      ghost.destroy();
      gameState = ("end");
       }
    
  
  
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250);
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    door.addImage(doorImg);

    var climber = createSprite(200,10);
    climber.addImage(climberImg);
   
   //add the random function
   door.x = Math.round(random(120,400))
   
    
    climber.x = door.x;
    climber.velocityY = 1;
   
    doorsGroup.add(door);
    climbersGroup.add(climber);

    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    ghost.depth = door.depth;
    ghost.depth +=1;
  
    //assign lifetime for the  door, climber and invisible block
   
 door.lifetime = 800;
   climber.lifetime = 80;
    invisibleblock.lifetime = 800;
    
  }
}

