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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 30, 0, 2 * Math.PI);
  ctx.stroke();

  requestAnimationFrame(drawCircle);
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