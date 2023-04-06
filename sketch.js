//Game States
var PLAY=1;
var END=0;
var gameState=1;

var knife,fruit ,monster,fruitGroup,monsterGroup, score,r,randomFruit, position;
var knifeImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage;
var gameOverSound ,knifeSwoosh;

function preload(){
  
  knifeImage = loadImage("knife.png");
  monsterImage = loadAnimation("alien1.png","alien2.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png")
  
  gameOverSound = loadSound("gameover.mp3")
  knifeSwooshSound = loadSound("knifeSwoosh.mp3")
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   knife=createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale=0.7
  
  
  
  //set collider for sword
  knife.setCollider("rectangle",0,0,40,40);

  // Score variables and Groups
  score=0;
  fruitGroup=createGroup();
  monsterGroup=createGroup();
  
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //Call fruits and Monster function
    fruits();
    Monster();
    
    // Move sword with mouse
    knife.y=World.mouseY;
    knife.x=World.mouseX;
  
    // Increase score if sword touching fruit
    if(fruitGroup.isTouching(knife)){
      fruitGroup.destroyEach();
      
      // knifeSwooshSound.play();
      // knifeSwooshSound.play;
      // knifeSwooshSound();
      // knifeSwooshSoundplay();


      // score=score;
      // score=+2;
      //Score=2;
      score=score+2;

    }
    else
    {
      // Go to end state if sword touching  
      if(monsterGroup.isTouching(knife)){
        gameState=END;
        //gameover sound
        gameOverSound.play()
        
        fruitGroup.destroyEach();
        monsterGroup.destroyEach();
        fruitGroup.setVelocityXEach(0);
        monsterGroup.setVelocityXEach(0);
        
        // Change the animation of sword to gameover and reset its position
        knife.addImage(gameOverImage);
        knife.scale=2;
        knife.x=300;
        knife.y=300;
      }
    }
  }
  
  drawSprites();
  //Display score
  textSize(25);
  text("Score : "+ score,250,50);
}


function Monster(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.y=Math.round(random(100,550));
    monster.velocityX=-(8+(score/10));
    monster.setLifetime=50;
    
    monsterGroup.add(monster);
  }
}

function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.x = 0   
    
        if(position===1)
    {
    
    fruit.x=400;
    fruit.velocityX=7;
    }

    function createStrawberry(){
  if(frameCount% 80 == 3){
  strawberry = createSprite(Math.round(random(50,550),-20,20,20));
  strawberry. addAnimation("strawberry",strawberryImg);
  strawberry.lifetime=200;   
  strawberry.velocityY= 4+score/20;
  strawberry. scale = 0.2; 
  strawberryG. add(strawberry);
}
}

function createMango(){
  if(frameCount% 150 == 0){
    mango = createSprite(Math.round(random(50,550),-20,20,20));
    mango. addAnimation("mango",mangoImg);
    mango.lifetime=200; 
    mango. scale = 0.3;
    mango. velocityY = 4+score/20;
    mangoG. add(mango);
  }
}

function createApple(){
  if(frameCount% 180 == 0 ){
    apple = createSprite(Math.round(random(50,550),-20,20,20))
    apple. addAnimation("apple",appleImg);
    apple.lifetime=200; 
    apple. scale = 0.3;
    apple. velocityY = 4+score/20;
    appleG. add(apple);
  }
}


  //Increase the velocity of fruit after score 4 

      // fruit.velocityX= (7+(score/4));
      // fruit.velocityY= (7+(score));
      // fruit.velocity= (7+(score/4));
      // fruit.velocityX= (7);
     
    fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,550));
   
        //fruit.velocityX=-7;

    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}