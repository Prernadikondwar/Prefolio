// ==== Simple Animated Glowing Stars Canvas ====
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');
const STAR_COLOR = "#7DF9FF";
const GLOW_COLOR = "rgba(0,191,255,0.55)";
let width = window.innerWidth,
    height = window.innerHeight;

function randomStar() {
  return {
    x: Math.random() * width, 
    y: Math.random() * height, 
    size: Math.random() * 1.7 + 0.7, 
    speed: Math.random() * 0.3 + 0.12, 
    glow: Math.random() * 8 + 8,
    direction: Math.PI * 2 * Math.random() // random direction
  };
}
let stars = Array.from({length: 120}, randomStar);

function drawStars() {
  ctx.clearRect(0,0,width,height);
  for (let star of stars) {
    // Glow
    ctx.save();
    ctx.globalAlpha = 0.4;
    ctx.shadowBlur = star.glow;
    ctx.shadowColor = GLOW_COLOR;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size+1, 0, 2 * Math.PI);
    ctx.fillStyle = STAR_COLOR;
    ctx.fill();
    ctx.restore();

    // Main star
    ctx.save();
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, 2*Math.PI);
    ctx.fillStyle = STAR_COLOR;
    ctx.shadowBlur = 1.5;
    ctx.shadowColor = "#fff";
    ctx.fill();
    ctx.restore();
  }
}

function animate() {
  for (let star of stars) {
    // Move in its own direction
    star.x += Math.cos(star.direction) * star.speed;
    star.y += Math.sin(star.direction) * star.speed;
    // Edge wrap
    if (star.x > width) star.x = 0;
    if (star.x < 0) star.x = width;
    if (star.y > height) star.y = 0;
    if (star.y < 0) star.y = height;
  }
  drawStars();
  requestAnimationFrame(animate);
}

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  stars = Array.from({length: 120}, randomStar);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animate();
