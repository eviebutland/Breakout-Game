// intialise elements to make it easier to reference 
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// create a fucntion that draws a cirle, and repeat this every 10 milliseconds
setInterval(draw, 10);

const x = canvas.width/2;
const y = canvas.height - 30;

const dx = 2;
const dy = -2;

function draw(){
   ctx.beginPath();
   ctx.arc(x, y, 10, 0, Math.PI*2);
   ctx.fillStyle = "#0095DD";
   ctx.fill();
   ctx.closePath();
   // add 2 or -2 ad every 10 milliseconds
   x += dx;
   y += dy;
}

