let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let canvasWidth = canvas.width;
  let canvasHeight = canvas.height;
  let cursorRadius = 30;
  ctx.fillStyle = 'white';

 
  ctx.beginPath();
  ctx.moveTo(canvasWidth / 2, 0);
  ctx.lineTo(canvasWidth / 2, canvasHeight);
  ctx.strokeStyle = 'black';
  ctx.stroke();

  canvas.addEventListener('mousemove', function(event) {
    let mouseX = event.clientX - canvas.getBoundingClientRect().left;
    let mouseY = event.clientY - canvas.getBoundingClientRect().top;

    //  cursor circle
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, cursorRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    //  mirror position
    let mirrorX = canvasWidth - mouseX;
    let mirrorY = mouseY;

   
    ctx.beginPath();
    ctx.arc(mirrorX, mirrorY, cursorRadius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, 0);
    ctx.lineTo(canvasWidth / 2, canvasHeight);
    ctx.strokeStyle = 'black';
    ctx.stroke();
  });
