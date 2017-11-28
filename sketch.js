var testplayer;
var playx;
var playy;
var xspeed = 15;

function preload() {
    testplayer = loadAnimation("assets/rotationtest01.png", "assets/rotationtest48.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    myPlayer = new Player(100, 500, 10, 10);

}

function draw() {
    background(255);
    myPlayer.move();
    myPlayer.render();
    /*animation(testplayer, 200, 450);*/

}

class Player {
    //it has a rest image
    //it has a moving animation and a move function
    //it stops when reaching an object
    //it has defined edges?

    constructor(tempx, tempy, temph, tempw) {
        this.x = tempx;
        this.y = tempy;
        this.h = temph;
        this.w = tempw;
    }
//render a cube
    /*render() {
        rectMode(CENTER);
        fill(0);
        rect(this.x, this.y, this.w, this.h);
    }
*/

    //someday render thing
    render (){
        animation(testplayer,this.x,this.y);
    }

    move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x = this.x - xspeed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x = this.x + xspeed
        }
    }


    
    relocate () {
        if (this.x >= windowWidth) {
            this.x == 5;
        }
        if (this.x <= 0) {
            this.x == 5;
            }
        }
    

}

//class stopper {


//}
