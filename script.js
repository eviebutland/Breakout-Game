// intialise elements to make it easier to reference 
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// create a fucntion that draws a cirle, and repeat this every 10 milliseconds
setInterval(draw, 10);

const x = canvas.width/2;
const y = canvas.height - 30;

const dx = 2;
const dy = -2;

const ballRadius = 10;

function drawBall(){
    // draw circle every 10 milliseconds
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    // clear canvas to leave on trail
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
// if ball co-ord is less than 0 then change direction on y axis equal to negative self
    if (y + dy < canvas.height){
        dy = -dy;
    }
    if (y = dy > 0){
        dy = -dy;
    }
   // add 2 or -2 every 10 milliseconds
   x += dx;
   y += dy;
}

