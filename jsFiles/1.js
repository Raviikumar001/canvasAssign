// const canvas = document.querySelector("#canvas");


// const ctx = canvas.getContext("2d");

// var canvasPos =getPosition(canvas);
// var mouseX = 0;
// var mouseY = 0;

// canvas.addEventListener("mousemove", setMousePosition, false);

// function setMousePosition(e)
// {
//     mouseX  = e.clientX - canvasPos.x ;

//     mouseY = e.clientY - canvasPos.y;
// }

// function drawCircle() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.beginPath();
//   ctx.arc(mouseX, mouseY, 30, 0, 2 * Math.PI);
//   ctx.stroke();

//   requestAnimationFrame(drawCircle);
// }

// drawCircle();


// function getPosition(el) {
//     var xPosition = 0;
//     var yPosition = 0;
   
//     while (el) {
//       xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//       yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
//       el = el.offsetParent;
//     }
//     return {
//       x: xPosition,
//       y: yPosition
//     };
//   }


  //https://www.kirupa.com/canvas/follow_mouse_cursor.htm
  //https://www.khanacademy.org/computer-programming/my-first-program/4739178984374272

  console.log("hello")
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let canvasWidth = canvas.width;
  let canvasHeight = canvas.height;
  let cursorRadius = 30;


  ctx.fillStyle = 'white';


  canvas.addEventListener('mousemove', function(event) {
    let mouseX = event.clientX - canvas.getBoundingClientRect().left;
    let mouseY = event.clientY - canvas.getBoundingClientRect().top;
    
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);


    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, 0);
    // ctx.lineTo(canvasWidth / 2, canvasHeight);
    // ctx.strokeStyle = 'black';
    // ctx.stroke();

  
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, cursorRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  });







  




 