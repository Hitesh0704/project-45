var  gameState=0;
var startButton;
var choice=0;

function preload(){
 bg1=loadImage("pictures/bg.jpg");
 plr1=loadImage("pictures/player1.png");
 plr2=loadImage("pictures/player2.png");
 plr3=loadImage("pictures/player3.png");
 plr4=loadImage("pictures/player4.png");
 cplr=loadImage("pictures/player5.png");

 field=loadImage("pictures/field.PNG");
}

function setup(){
 createCanvas(windowWidth-25,windowHeight-25);

computer=createSprite(100,200);

player=createSprite(500,200);

}

function draw() {

if(gameState==0){
  background(bg1);
  textSize(46);
  textFont("Algerian");
  fill("blue");
  textStyle("Bold");
  text("Welcome to Mini FootBall Game",windowWidth/2-300,windowHeight/2);
  
  startButton=createButton("Start");
  
  startButton.style("width","100px");
  startButton.style("background","orange");
  startButton.position(windowWidth/2,windowHeight/2+50);
  
  startButton.mousePressed(()=>{
    gameState=1;
    
  });
}
if(gameState==1){
  background("green");
  startButton.hide();
  imageMode(CENTER);
  image(plr1,200,windowHeight/2-50,80,50);
  button1=createButton("Player 1");
  button1.style("background","orange");
  button1.position(170,windowHeight/2);

  image(plr2,500,windowHeight/2-50,80,50);
  button2=createButton("Player 2");
  button2.style("background","orange");
  button2.position(470,windowHeight/2);

  image(plr3,800,windowHeight/2-50,80,50);
  button3=createButton("Player 3");
  button3.style("background","orange");
  button3.position(770,windowHeight/2);

  image(plr4,1100,windowHeight/2-50,80,50);
  button4=createButton("Player 4");
  button4.style("background","orange");
  button4.position(1070,windowHeight/2);

  if (choice==1){
    button1.style("background","red");
  }
  if (choice==2){
    button2.style("background","red");
  }
  if (choice==3){
    button3.style("background","red");
  }
  if (choice==4){
    button4.style("background","red");
  }
  button1.mousePressed(()=>{
    choice=1
  });
  button2.mousePressed(()=>{
    choice=2
  });
  button3.mousePressed(()=>{
    choice=3
  });
  button4.mousePressed(()=>{
    choice=4
  });
  playButton=createButton("PLAY");
  playButton.style("background","orange");
  playButton.position(windowWidth/2,windowHeight/2);

  playButton.mousePressed(()=>{
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();

    if(choice==1){
      player.addImage(plr1);
    }
    if(choice==2){
      player.addImage(plr2);
    }
    if(choice==3){
      player.addImage(plr3);
    }
    if(choice==4){
      player.addImage(plr4);
    }
    gameState=2;
  });
}
if(gameState==2){
background(field);
}
  


}