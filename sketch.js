var marioani, mario;
var coinimg, coin;
var princessimg, princess;
var bg;
var enemyani, enemyGroup;
var turtleani, turtle;
var groundimg, ground;
var invisGround1
var flowerani, flowerGroup
var mario_fall
var gameState, score
var PLAY, START, END, WIN
var pipeimg, pipeGroup
var startimg, starts

function preload() {
bg = loadImage("sprites/bg.png")

enemyani = loadAnimation("sprites/enemy1.png", "sprites/enemy2.png")

groundimg = loadImage("sprites/ground.png")

marioani = loadAnimation("sprites/mario1.png", "sprites/mario2.png")

flowerani = loadImage("sprites/PIPE.png", "sprites/flower1.png")

mario_fall = loadAnimation("sprites/mario_dead.png")

pipeimg = loadImage("sprites/pipes.png")

startimg = loadImage("sprites/sprite_game0 (2).png")
}

function setup(){
    var canvas = createCanvas(displayWidth, displayHeight);

 
ground = createSprite(600,850,1000,10)
ground.addImage(groundimg)
ground.x = ground.width/2
ground.velocityX = -3

mario = createSprite(100, 770, 10, 01)
mario.addAnimation("running", marioani)
mario.scale = 0.5

pipeGroup = new Group()

enemyGroup = new Group()

invisGround1 = createSprite(600, 841, 2000,20)
invisGround1.visible = false

starts = createSprite(600,600,060,060)
starts.addImage("starting", startimg)

flowerGroup = new Group()

START = 0
PLAY = 1
END = 2
WIN = 3

gameState = START


}

function draw(){
    background(bg);

    mario.collide(invisGround1)

  if (keyDown("space") && mario.y >= 10 && mario.isTouching(ground) ){
      mario.velocityY = -20
  }

  if (keyDown(UP_ARROW) && mario.y >= 10 && mario.isTouching(ground) ){
    mario.velocityY = -20
}

if (gameState === START){
  
}

//if (enemyGroup.isTouching(mario)){
//mario.changeAnimation("fall", mario_fall) 
//enemyGroup.setVelocityXEach(0)
//flowerGroup.setVelocityXEach(0)
//ground.velocityX = 0
//}

  mario.velocityY = mario.velocityY +0.5

    if (ground.x < 0){
        ground.x = ground.width/2;
     }

    goombaSpawn()
pipeSpawn()
  //  flowerSpawn()

     //console.log(frameCount)

 drawSprites()   

 textSize(20)
  text("Press the Spacebar key to start playing",600, 1200)

}

function goombaSpawn() {
  if(frameCount % 50 === 0) {
  var enemy = createSprite(2000,780,10,40);
enemy.velocityX = -50
enemy.addAnimation("goomba", enemyani);
enemy.scale = 0.2
enemyGroup.add(enemy)
}  
}

  function flowerSpawn() {
 if(frameCount % 490 === 0) {
      var flower = createSprite(2000,780,10,40);
        flower.velocityX = -4
        flower.addImage("flower", flowerani);
        flower.scale = 0.2
        flowerGroup.add(flower)
    }  
    }

    function pipeSpawn() {
      if(frameCount % 40 === 0) {
           var pipe = createSprite(2000,780,10,40);
             pipe.velocityX = -4
             pipe.addImage("pipes ", pipeimg);
             pipe.scale = 0.2
             pipeGroup.add(pipe)
         }  
         }