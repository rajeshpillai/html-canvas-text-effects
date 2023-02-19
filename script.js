window.addEventListener("load", function () {
  const canvas = this.document.getElementById("canvas1");
  
  const ctx = canvas.getContext('2d');

  // Set canvas width and height to window
  // DO NOT set canvas width/height with CSS as it stretch the drawing surface area and distort your drawings.
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});