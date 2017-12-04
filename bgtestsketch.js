var playerSprite;
var playerresting;
var playerrestingleft;
var playerleft;
var playerright;
var playerstop;
var greenSprite;
var greenpeace;
var i;

function preload() {
    playerresting = loadAnimation("assets/resting1.png", "assets/resting8.png");
    playerrestingleft = loadAnimation("assets/restingleft1.png", "assets/restingleft8.png");
    playerstop = loadAnimation("assets/stopped1.png", "assets/stopped8.png");
    playerleft = loadAnimation("assets/leftrun01.png", "assets/leftrun13.png");
    playerright = loadAnimation("assets/rightrun01.png", "assets/rightrun13.png");
    greenpeace = loadAnimation("assets/greenpeace1.png", "assets/greenpeace4.png");
    back1 = loadImage("assets/background 1.png");
    back2 = loadImage("assets/background 2.png");
    back3 = loadImage("assets/background 3.png");
    back4 = loadImage("assets/background 4.png");
    
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    playerSprite = createSprite (100, 600);
    playerSprite.addAnimation("resting", playerresting);
    playerSprite.addAnimation("restingleft", playerrestingleft);
    playerSprite.addAnimation("stopped", playerstop);
    playerSprite.addAnimation("run right", playerright);
    playerSprite.addAnimation("run left", playerleft);
    playerSprite.setCollider("rectangle", 0, -200, 475, 525);
    
    greenSprite = createSprite (1300, 600);
    greenSprite.addAnimation("green", greenpeace);
    greenSprite.setCollider("rectangle", -150, -200, 250, 525);
    
    var bg = [back1, back2, back3, back4];
    
}

function draw() {
    background(255);
    
    image(bg[0], 0, 0);
    
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
    
    
    if (keyIsDown(SHIFT)) {
        playerSprite.overlap(greenSprite);
    } else {
     playerSprite.collide(greenSprite, playerstopped);   
    }
    
    function playerstopped(playerSprite) {
        playerSprite.changeAnimation("stopped");
    } 
    
    
    
    playerSprite.debug = mouseIsPressed;
    greenSprite.debug = mouseIsPressed;
    
  drawSprites();

}