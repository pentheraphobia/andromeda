var canvas = document.getElementById("theCanvas");
var ctx = canvas.getContext("2d");
document.getElementById("theCanvas").style.backgroundColor = '#000010'

 /// put vars here

var leftPressed = false;
var upPressed = false;
var rightPressed = false;
var downPressed = false;
var spacePressed = false;

var crouching = false;
var lookingUp = false;
var facing = "right";

var manWidth = 15;
var manHeight = 20;
var manX = (canvas.width-manWidth)/2;
var manY = (canvas.height-manHeight)/2;
var manSpeed = 0;
var manAccel = 0.5;
var manMaxSpeed = 3;
var manGrav = 0;
var manGravAccel = 1;
var manGravMaxSpeed = 5;


document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);

function keyDownHandler(e) {
    if (e.keyCode == 37 || 65) {
        leftPressed = true;  // 37 is left arrow, 65 is A key
    }
    if (e.keyCode == 38 || 87) {
        upPressed = true;    // 38 is up arrow, 87 is W key
    }
    if (e.keyCode == 39 || 68) {
        rightPressed = true; // 39 is right arrow, 68 is D key
    }
    if (e.keyCode == 40 || 83) {
        downPressed = true;  // 40 is down arrow, 83 is S key
    }
    if (e.keyCode == 32) {
        spacePressed = true; // 32 is space bar
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 37 || 65) {
        leftPressed = false;
    }
    if (e.keyCode == 38 || 87) {
        upPressed = false;
    }
    if (e.keyCode == 39 || 68) {
        rightPressed = false;
    }
    if (e.keyCode == 40 || 83) {
        downPressed = false;
    }
    if (e.keyCode == 32) {
        spacePressed = false;
    }
}

function controlMan() {
    if (upPressed) {
        lookingUp = true;
    }
    if (downPressed) {
        crouching = true;
    }
    if (leftPressed) {
        facing = "left";
        manSpeed -= manAccel;
    }
    if (rightPressed) {
        facing = "right";
        manSpeec += manAccel;
    }
}

function drawMan() {
    ctx.beginPath();
    ctx.rect((manX-manWidth/2),(manY-manHeight)/2,(manX+manWidth)/2,(manY+manHeight)/2);
    ctx.fillStyle="#4682b4";
    ctx.fill();
    ctx.closePath();
}

function drawTerrain() {
    ctx.beginPath() {
    ctx.rect(canvas.width/2-100,canvas.height/2-20,200,40);
    ctx.fillStyle="#00FF00";
    ctx.fill();
    ctx.closePath();
    }
}

function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    controlMan();
    drawMan();
    drawTerrain();

    requestAnimationFrame(draw);
}