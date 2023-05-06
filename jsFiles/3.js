let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let cursorRadius = 30;
ctx.fillStyle = 'white';

// separate the canvas into four quadrants
ctx.beginPath();
ctx.moveTo(canvasWidth / 2, 0);
ctx.lineTo(canvasWidth / 2, canvasHeight);
ctx.moveTo(0, canvasHeight / 2);
ctx.lineTo(canvasWidth, canvasHeight / 2);
ctx.strokeStyle = 'black';
ctx.stroke();

canvas.addEventListener('mousemove', function(event) {
  let mouseX = event.clientX - canvas.getBoundingClientRect().left;
  let mouseY = event.clientY - canvas.getBoundingClientRect().top;

 
  let quadrantX = mouseX < canvasWidth / 2 ? 0 : 1;
  let quadrantY = mouseY < canvasHeight / 2 ? 0 : 1;


  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, cursorRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.stroke();

//mirror positions
  let mirrorX = quadrantX === 0 ? canvasWidth - mouseX : mouseX;
  let mirrorY = quadrantY === 0 ? canvasHeight - mouseY : mouseY;

  //cursor cicrle
  ctx.beginPath();
  ctx.arc(mirrorX, mirrorY, cursorRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(canvasWidth - mirrorX, mirrorY, cursorRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(mirrorX, canvasHeight - mirrorY, cursorRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(canvasWidth - mirrorX, canvasHeight - mirrorY, cursorRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  
  ctx.beginPath();
  ctx.moveTo(canvasWidth / 2, 0);
  ctx.lineTo(canvasWidth / 2, canvasHeight);
  ctx.moveTo(0, canvasHeight / 2);
  ctx.lineTo(canvasWidth, canvasHeight / 2);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  // active quadrant
  ctx.fillStyle = 'rgba(251, 249, 249, 0.302)';
  ctx.fillRect(quadrantX * canvasWidth / 2, quadrantY * canvasHeight / 2, canvasWidth / 2, canvasHeight / 2);
});