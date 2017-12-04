var playerSprite;
var playerresting;
var playerrestingleft;
var playerleft;
var playerright;
var playerstop;
var greenSprite;
var greenpeace;

function preload() {
    playerresting = loadAnimation("assets/resting1.png", "assets/resting8.png");
    playerrestingleft = loadAnimation("assets/restingleft1.png", "assets/restingleft8.png");
    playerstop = loadAnimation("assets/stopped1.png", "assets/stopped8.png");
    playerleft = loadAnimation("assets/leftrun01.png", "assets/leftrun13.png");
    playerright = loadAnimation("assets/rightrun01.png", "assets/rightrun13.png");
    greenpeace = loadAnimation("assets/greenpeace1.png", "assets/greenpeace4.png");
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

//class stopper {

/*
 if(spritename.position.y > height + 100)
 {mySprite.remove();
 }
 
  if(platform.overlapPixel(triangle.position.x, triangle.position.y+30)==false)
    triangle.velocity.y += GRAVITY;
    
     while(platform.overlapPixel(triangle.position.x, triangle.position.y+30))
    {
    triangle.position.y--;
    triangle.velocity.y = 0;
    }
    
    I could remove the stopper
       if(keyIsDown(SHIFT)) {
        greenSprite.remove();
    }
    this didn't work, the collision box was still in effect.
    
    
    set it's collider to overlap, not colide if given certain circumstances. 
    
    I could set the visibility of all the characters to change based on what number in the array they are
    
    I could do an endless running type thing for my map instead of individual backgrounds
*/

//}
