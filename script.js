// intialise elements to make it easier to reference 
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// create a fucntion that draws a cirle, and repeat this every 10 milliseconds
setInterval(draw, 10);

const x = canvas.width/2;
const y = canvas.height - 30;

const dx = 2;
const dy = -2;

function drawBall(){
    // draw circle every 10 milliseconds
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw(){
    // clear canvas to leave on trail
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
   // add 2 or -2 every 10 milliseconds
   x += dx;
   y += dy;
}

