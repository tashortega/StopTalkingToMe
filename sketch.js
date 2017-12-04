var playerSprite;
var playerresting;
var playerrestingleft;
var playerleft;
var playerright;
var playerstop;

function preload() {
    playerresting = loadAnimation("assets/resting1.png", "assets/resting8.png");
    playerrestingleft = loadAnimation("assets/restingleft1.png", "assets/restingleft8.png");
    playerstop = loadAnimation("assets/stopped1.png", "assets/stopped8.png");
    playerleft = loadAnimation("assets/leftrun01.png", "assets/leftrun13.png");
    playerright = loadAnimation("assets/rightrun01.png", "assets/rightrun13.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    playerSprite = createSprite (100, 600, 100, 500);
    playerSprite.addAnimation("resting", playerresting);
    playerSprite.addAnimation("restingleft", playerrestingleft);
    playerSprite.addAnimation("stopped", playerstop);
    playerSprite.addAnimation("run right", playerright);
    playerSprite.addAnimation("run left", playerleft);
    
    
    
}

function draw() {
    background(255);
    
    playerSprite.velocity.x = 0;
    
    if (keyIsPressed === false) {
        playerSprite.changeAnimation("resting");
    }
    
    //run right
    if (keyIsDown(RIGHT_ARROW)) {
            playerSprite.velocity.x = 20;
            playerSprite.changeAnimation("run right");
        } /*else {playerSprite.changeAnimation("resting");
               }*/
    
    //run left
        if (keyIsDown(LEFT_ARROW)) {
            playerSprite.velocity.x = -20;
            playerSprite.changeAnimation("run left");
        } /*else {playerSprite.changeAnimation("restingleft");
               }*/    
    
    //screen edge reset
    if(playerSprite.position.x > width)
    {playerSprite.position.x = 0;}
    
    if(playerSprite.position.x < 0) {
        playerSprite.position.x = width;
    }
    
  drawSprites();

}

//class stopper {


//}
