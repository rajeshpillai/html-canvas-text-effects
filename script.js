window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  
  const ctx = canvas.getContext('2d');

  // Set canvas width and height to window
  // DO NOT set canvas width/height with CSS as it stretch the drawing surface area and distort your drawings.
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Drawing style and positioning text

  // Draw axes lines
  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.moveTo(canvas.width/2, 0);
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  ctx.strokeStyle = "green";
  ctx.beginPath();
  ctx.moveTo(0, canvas.height/2);
  ctx.lineTo(canvas.width, canvas.height/2);
  ctx.stroke();

  const text = "Hello!";
  const textX = canvas.width/2;
  const textY = canvas.height/2;
  
  
  ctx.fillStyle = "white";
  ctx.strokeStyle = "orangered";
  
  ctx.font = "80px Helvetica";

  // start, center, end
  ctx.textAlign = "center";

  // top, bottom, ideographic, middle, alphabetic
  ctx.textBaseline = 'alphabetic';

  ctx.fillText(text, textX, textY);
  ctx.strokeText(text, textX, textY);
  


});