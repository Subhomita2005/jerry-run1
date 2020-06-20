var bg , bgImg;
var jerry, jerryImg;
var gameState = "PLAY";
var invisibleGround;
var edges;
var cheeseImg, cheeseGroup, cheese1Group;
var bgsound;
var a=0 ;
var score = 0;

function preload(){
  bgImg = loadImage("backgroundtest1.png");
  jerryImg = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png");
  cheeseImg = loadImage("cheese.png");
  bgsound =  loadSound("jerrytheme.wav");


}


function setup() {
  createCanvas(1200,600);
  bg = createSprite(500,300);
  bg.addImage("level1",bgImg);
  bg.scale = 0.3;
  invisibleGround = createSprite(180,580,1800,10);
  invisibleGround.visible = false ;
 // bg.velocityX = -4 ;
  jerry = createSprite(100,550, 10 ,50);
  jerry.addAnimation("jerry",jerryImg);
  jerry.setCollider("circle",0,0,20);
  jerry.scale = 2;
  jerry.debug = true;

  cheeseGroup = new Group();
  cheese1Group = new Group();
  
 
 
  //jerry.debug = true;
  edges = createEdgeSprites();
}

function draw() {
  background(0);  
  if (gameState === "PLAY"){
   // if (bg.x<0){
   //   bg.x = 900;
    //  }
      if(keyDown("space")){
        jerry.velocityY = -10;
      }
      bgsound.loop();
      jerry.velocityY = jerry.velocityY + 0.5;
      Tom();
      cheese();
      cheese1();
      if(cheeseGroup.isTouching(jerry)){
        cheeseGroup.destroyEach();
        score = score+1 ;
      }
      if(cheese1Group.isTouching(jerry)){
        cheese1Group.destroyEach();
        score = score+1 ;
      }
     
    }
  jerry.collide(invisibleGround);
  
  drawSprites();
  textSize(24);
  fill("black");
  text("CHEESE COUNT =" + score,900, 100);
}
function Tom(){
  if(frameCount % 100 ===0){
    var tom = createSprite(1000,550,10,50);
    tom.velocityX = -5;
    tom.shapeColor = "red"
    tom.depth = bg.depth + 1;
    tom.lifetime = 200;
    
  }
}
function cheese(){
  if(frameCount % 270 === 0){
    var cheese = createSprite(random(1200,1400),450,10,50);
    cheese .velocityX = -3;
    cheese.shapeColor = "pink";
    cheese.lifetime = 400;
    cheese.addImage("cheese",cheeseImg);
    cheese.scale = 0.1;
    cheeseGroup.add(cheese);
    a = a+1 ;
    cheese.debug = true;

  }
}
function cheese1(){
  if(frameCount % 270 === 0){
    var cheese1 = createSprite(random(1000,1200),450,10,50);
    cheese1.velocityX = -3;
    cheese1.shapeColor = "pink";
    cheese1.lifetime = 400;
    cheese1.addImage("cheese",cheeseImg);
    cheese1.scale = 0.1;
    cheese1Group.add(cheese1);
    a = a+1 ;


  }
}