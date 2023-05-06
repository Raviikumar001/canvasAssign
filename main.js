const canvas = document.querySelector("#canvas");
//code here

const ctx = canvas.getContext("2d");



ctx.beginPath();
ctx.arc(100, 75, 30, 0, 2 * Math.PI);
ctx.stroke(); 
