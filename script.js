function openMessage() {
  document.getElementById('msg').classList.add('show');
}

const petals = document.querySelector('.petals');

for (let i = 0; i < 30; i++) {
  let petal = document.createElement('div');

  petal.className = 'petal';
  petal.innerHTML = '🌸';

  petal.style.left = Math.random() * 100 + '%';
  petal.style.animationDuration = 6 + Math.random() * 6 + 's';

  petals.appendChild(petal);
}

const hearts = document.querySelector('.hearts');

for (let i = 0; i < 20; i++) {
  let heart = document.createElement('div');

  heart.className = 'heart';
  heart.innerHTML = '❤';

  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = 14 + Math.random() * 18 + 'px';
  heart.style.animationDuration = 6 + Math.random() * 6 + 's';

  hearts.appendChild(heart);
}

const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function firework() {
  let x = Math.random() * canvas.width;
  let y = (Math.random() * canvas.height) / 2;

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: x,
      y: y,
      dx: (Math.random() - 0.5) * 7,
      dy: (Math.random() - 0.5) * 7,
      life: 90,
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

animate();

let interval = setInterval(firework, 700);

setTimeout(() => {
  clearInterval(interval);
}, 15000);
