const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let w, h, stars;

function init() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;

  stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.5,
      opacity: Math.random() * 0.5 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      twinklePhase: Math.random() * Math.PI * 2
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, w, h);

  stars.forEach(star => {
    star.twinklePhase += star.twinkleSpeed;
    const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  requestAnimationFrame(animate);
}

window.addEventListener('resize', init);

init();
animate();
        