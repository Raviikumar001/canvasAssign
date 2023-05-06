const canvas = document.querySelector("#canvas");
//code here

const ctx = canvas.getContext("2d");

var canvasPos =getPosition(canvas);
var mouseX = 0;
var mouseY = 0;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e)
{
    mouseX  = e.clientX - canvasPos.x ;

    mouseY = e.clientY - canvasPos.y;
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(100, 75, 30, 0, 2 * Math.PI);
  ctx.stroke();
}

drawCircle();


function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;
   
    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }