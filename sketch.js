var playerSprite;
var playerresting;
var playerrestingleft;
var playerleft;
var playerright;
var playerstop;
var screaming
var greenSprite;
var greenpeace;
var blueapron;
var freehugs;
var i = 0;
var bg;
var lastbg;

function preload() {
    playerresting = loadAnimation("assets/resting1.png", "assets/resting8.png");
    playerrestingleft = loadAnimation("assets/restingleft1.png", "assets/restingleft8.png");
    playerstop = loadAnimation("assets/stopped1.png", "assets/stopped8.png");
    playerleft = loadAnimation("assets/leftrun01.png", "assets/leftrun13.png");
    playerright = loadAnimation("assets/rightrun01.png", "assets/rightrun13.png");
    screaming = loadAnimation("assets/scream01.png", "assets/scream13.png");
    greenpeace = loadAnimation("assets/greenpeace1.png", "assets/greenpeace4.png");
    blueapron = loadAnimation("assets/blueapron1.png", "assets/blueapron4.png");
    freehugs = loadAnimation("assets/freehugs1.png", "assets/freehugs4.png");
    back1 = loadImage("assets/bg1.png");
    back2 = loadImage("assets/bg2.png");
    back3 = loadImage("assets/bg3.png");
    back4 = loadImage("assets/bg4.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight);

    greenSprite = createSprite(1500, 719);
    greenSprite.addAnimation("green", greenpeace);
    greenSprite.setCollider("rectangle", -150, -200, 250, 525);

    blueSprite = createSprite(1100, 719);
    blueSprite.addAnimation("blue", blueapron);
    blueSprite.setCollider("rectangle", -150, -200, 250, 550);

    redSprite = createSprite(700, 719);
    redSprite.addAnimation("red", freehugs);
    redSprite.setCollider("rectangle", -150, -200, 250, 525);

    playerSprite = createSprite(100, 719);
    playerSprite.addAnimation("resting", playerresting);
    playerSprite.addAnimation("restingleft", playerrestingleft);
    playerSprite.addAnimation("stopped", playerstop);
    playerSprite.addAnimation("run right", playerright);
    playerSprite.addAnimation("run left", playerleft);
    playerSprite.addAnimation("scream", screaming);
    playerSprite.setCollider("rectangle", 0, -200, 475, 525);
    
    bg = [back1, back2, back3, back4];
    lastbg = bg.length-1;

}

function draw() {
    background(255);
    
    image (bg [i], 0, -200);
    
    drawSprite(playerSprite);

    playerSprite.velocity.x = 0;

//resting animation
    if (keyIsPressed === false) {
        playerSprite.changeAnimation("resting");
    }

    
//run right
    if (keyIsDown(RIGHT_ARROW)) {
        playerSprite.velocity.x = 20;
        playerSprite.changeAnimation("run right");
    }

//run left
    if (keyIsDown(LEFT_ARROW)) {
        playerSprite.velocity.x = -20;
        playerSprite.changeAnimation("run left");
    }

//screen edge reset and counter
   if(playerSprite.position.x > width && i < lastbg)
    {playerSprite.position.x = 0;
     i++;
    }

     if(playerSprite.position.x < 0 && i > 0) {
        playerSprite.position.x = width;
        i--;
    }

//map edges stop
    if (playerSprite.position.x < 0 && i<= 0) {
        playerSprite.position.x = 5;
    }
    
    if (playerSprite.position.x > width && i>= lastbg) {
        playerSprite.position.x = width - 5;
    }

//screaming
    if (keyIsDown(SHIFT)) {
        playerSprite.changeAnimation("scream");
        playerSprite.overlap(greenSprite);
    } else {
        return false;
        /*playerSprite.collide(greenSprite, playerstopped);*/
    }

//stopped change animation
    function playerstopped(playerSprite) {
        playerSprite.changeAnimation("stopped");
    }


//debug
    playerSprite.debug = mouseIsPressed;
    greenSprite.debug = mouseIsPressed;

}

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
