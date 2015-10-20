'use strict';

var canvas;
var canvasWidth;
var canvasHeight;
var ctx;
var canvasData;
var playerShip = {};
var shipTrail = [];
var stars = [];
var lastX,lastY,nextXLoc,nextYLoc;
var cycle = false;
var blueColors = ["#327CCB","#3235CF","#B0B0FF","#3035FF"];
var greenColors = ["#32CF7C","#32A035","#50FF50","#30B000"];
var redColors = ["#AF2C22","#A03235","#FF5050","#B03000"];
var NUM_STARS = 300;
var SHIP_SIZE = 64;
var SHIP_TRAIL_COUNT = 64;
var clickLocX,clickLocY;

function relMouseCoords(event) {
    if (event.offsetX !== undefined && event.offsetY !== undefined) {
        return { x: Math.round(event.offsetX * (this.width / this.offsetWidth)), y: Math.round(event.offsetY * (this.height / this.offsetHeight)) };
    }
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do {
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while (currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    // Fix for variable canvas width
    canvasX = Math.round(canvasX * (this.width / this.offsetWidth));
    canvasY = Math.round(canvasY * (this.height / this.offsetHeight));

    return { x: canvasX, y: canvasY };
}

HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;

(function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

function drawline(shipctx, strokeStyle, startX, startY, endX, endY) {
    shipctx.beginPath();
    shipctx.strokeStyle = strokeStyle;
    shipctx.moveTo(startX,startY);
    shipctx.lineTo(endX,endY);
    shipctx.stroke();
    lastX = endX;
    lastY = endY;
}

function shipArt(size) {
    var shipLines = 25;
    var shipCanvas = document.createElement('canvas');
    shipCanvas.width = size;
    shipCanvas.height = size;
    var shipctx = shipCanvas.getContext('2d');

    lastX = size/2;
    lastY = 0;
    var colors = Math.random() > 0.5 ? greenColors : blueColors;
    var colorindex = 0;
    for (var i = 0; i < shipLines; i++) {
        nextYLoc = Math.random() * size;
        nextXLoc = ((Math.random() * size / 2) * (nextYLoc / size)) + size / 2;
        drawline(shipctx, colors[colorindex],lastX,lastY,nextXLoc,nextYLoc);
        colorindex++;
        if (colorindex >= colors.length)
            colorindex = 0;
    }
    
    shipctx.save();
    shipctx.translate(size/2,0);
    shipctx.scale(-1, 1);
    shipctx.drawImage(shipCanvas,-size/2, 0);
    shipctx.restore();

    return shipCanvas;
}

function shipTrailPart() {
    this.reset = function () {
        this.x = playerShip.xLoc - 2 + Math.random() * 4;
        this.y = playerShip.yLoc+20;
        this.speed = 100 + Math.random() * 100;
        this.opacity = 10 + Math.floor(this.speed / 200 * 245);
        this.r = 128 + Math.random() * 128 | 0;
        this.g = 128 + Math.random() * 128 | 0;
        this.b = 0;
    };
    this.reset();
}

function star() {
    this.reset = function () {
        this.x = Math.random() * canvasWidth;
        this.y = 0;
        this.speed = 10 + Math.random() * 30;
        this.opacity = 10 + Math.floor(this.speed / 40 * 245);
        this.r = 128 + Math.random() * 128 | 0;
        this.g = 128 + Math.random() * 128 | 0;
        this.b = 128 + Math.random() * 128 | 0;
    };
    this.reset();
    this.y = Math.random() * canvasHeight;
}


// That's how you define the value of a pixel //
function drawPixel (x, y, r, g, b, a) {
    if (x < 0 || x > canvasWidth || y < 0 || y > canvasHeight)
        return;
    
    var index = (x + y * canvasWidth) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

function drawStars(timeDiff, stars) {
    for(var i = 0; i < NUM_STARS; i++) {
        stars[i].y = stars[i].y + stars[i].speed * timeDiff;
        if (stars[i].y > canvasHeight) {
            stars[i].reset();
        }
        drawPixel(Math.round(stars[i].x),Math.round(stars[i].y),stars[i].r,stars[i].g,stars[i].b,stars[i].opacity);
    }
  
    for (var i=0; i<SHIP_TRAIL_COUNT; i++){
        shipTrail[i].y = shipTrail[i].y + shipTrail[i].speed * timeDiff;
        shipTrail[i].x += -1 + Math.random() * 2;
        shipTrail[i].opacity -= (1500 / shipTrail[i].opacity);
        if (shipTrail[i].opacity < 10) {
            shipTrail[i].reset();
        }
        drawPixel(Math.round(shipTrail[i].x),Math.round(shipTrail[i].y),shipTrail[i].r,shipTrail[i].g,shipTrail[i].b,shipTrail[i].opacity);
    }
}

function drawShipLine(ctx) {
    if (clickLocX && clickLocY) {
        ctx.strokeStyle = '#333';
        ctx.beginPath();
        ctx.moveTo(playerShip.xLoc, playerShip.yLoc);
        ctx.lineTo(clickLocX, clickLocY);
        ctx.stroke();

        ctx.strokeStyle = '#0B0';
        ctx.beginPath();
        ctx.moveTo(clickLocX - 5, clickLocY - 5);
        ctx.lineTo(clickLocX + 5, clickLocY + 5);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(clickLocX + 5, clickLocY - 5);
        ctx.lineTo(clickLocX - 5, clickLocY + 5);
        ctx.stroke();
    }
}
var fps = 60;
var fpsCounter = 0;
var lastFps = 0;

function drawFps(updateTime) {
    fpsCounter++;
    if (updateTime >= lastFps + 1000) {
        fps = fpsCounter;
        lastFps = updateTime;
        fpsCounter = 0;
        document.getElementById("stats").innerHTML = fps.toFixed() + " fps - ship location " + playerShip.xLoc.toFixed() + " , " + playerShip.yLoc.toFixed() + "<br>JoyAxis1 = " + joyAxis1.toFixed(2) + ", JoyAxis2 = " + joyAxis2.toFixed(2);
      
        if (cycle)
            newShip();
    }
}

function drawShip(ctx, timeDiff) {  
    ctx.save();
    ctx.translate(playerShip.xLoc, playerShip.yLoc);
    ctx.rotate(playerShip.rotation);
    ctx.drawImage(playerShip.art,  -playerShip.offset, -playerShip.offset);
    ctx.restore();
}

function updatePlayerShip(timeDiff) {
    if (joyAxis1 > 0.25 || joyAxis1 < -0.25 || joyAxis2 > 0.25 || joyAxis2 < -0.25) {
        updateShipSpeed(joyAxis1,joyAxis2,timeDiff);
    } else if (clickLocX && clickLocY && Math.sqrt(Math.pow(playerShip.xLoc - clickLocX, 2) + Math.pow(playerShip.yLoc - clickLocY, 2)) > 5) {

        var xDiff = clickLocX - playerShip.xLoc;
        var yDiff = clickLocY - playerShip.yLoc;

        updateShipSpeed(xDiff, yDiff, timeDiff);
    } else {
        clickLocX = null;
        clickLocY = null;
        playerShip.xSpeed = 0;
        playerShip.ySpeed = 0;
    }
    var maxRot = playerShip.xSpeed / 500;
    var timeMult = timeDiff;
  
    if (playerShip.rotation >= maxRot) {
        if (playerShip.rotation - timeMult >= maxRot)
            playerShip.rotation -= timeMult;
        else
            playerShip.rotation = maxRot;
    }
    if (playerShip.rotation <= maxRot) {
        if (playerShip.rotation + timeMult <= maxRot)
            playerShip.rotation += timeMult;
        else
            playerShip.rotation = maxRot;
    }
}

function updateShipSpeed(xDiff, yDiff, timeDiff) {
    var multi = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

    playerShip.xSpeed = xDiff / multi * playerShip.maxSpeed;
    playerShip.ySpeed = yDiff / multi * playerShip.maxSpeed;

    if (playerShip.xLoc + playerShip.xSpeed * timeDiff > 0 && playerShip.xLoc + playerShip.xSpeed * timeDiff < canvasWidth)
        playerShip.xLoc += playerShip.xSpeed * timeDiff;
    if (playerShip.yLoc + playerShip.ySpeed * timeDiff > 0 && playerShip.yLoc + playerShip.ySpeed * timeDiff < canvasHeight)
        playerShip.yLoc += playerShip.ySpeed * timeDiff;
}

var lastUpdate = 0;
var joyAxis1 = 0;
var joyAxis2 = 0;

function update() {

    requestAnimationFrame(update);

    // get time difference since last frame
    var updateTime = new Date().getTime();
    var timeDiff = (Math.min(100, Math.max(updateTime - lastUpdate,0))) / 1000;
    lastUpdate = updateTime;
  
    // get gamepad axis values
  
    if (typeof navigator.getGamepads !== 'undefined' && navigator.getGamepads()[0]) {
        joyAxis1 = navigator.getGamepads()[0].axes[0];
        joyAxis2 = navigator.getGamepads()[0].axes[1];
    }
	
    // update game state
    updatePlayerShip(timeDiff);

    // render current game state
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    drawStars(timeDiff, stars);
    ctx.putImageData(canvasData, 0, 0);

    drawShipLine(ctx);
    drawShip(ctx, timeDiff);

    drawFps(updateTime);	
};

var coords;

function startGame(){
    canvas = document.getElementById('game_canvas');
    ctx = canvas.getContext("2d");
    canvas.width = 480;
    canvas.height = 640;
    canvas.addEventListener('click', function (event) {
        coords = canvas.relMouseCoords(event);
        clickLocX = coords.x;
        clickLocY = coords.y;
    });

    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
	
    for (var i = 0; i < NUM_STARS; i++) {
        stars[i] = new star();
    }
  
    playerShip.art = shipArt(SHIP_SIZE);
    playerShip.xLoc = canvasWidth / 2;
    playerShip.yLoc = canvasHeight - (canvasHeight / 8);
  
    for (var i = 0; i < SHIP_TRAIL_COUNT; i++) {
        shipTrail[i] = new shipTrailPart();
    }
  
    playerShip.maxSpeed = 100;
    playerShip.offset = SHIP_SIZE/2;
    playerShip.rotation = 0;

	
    update();
}

startGame();


function newShip(){
    playerShip.art = shipArt(SHIP_SIZE);
}
