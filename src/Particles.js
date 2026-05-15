// particles.js — خلفية نقط متحركة بتتوصل ببعض
// استخدام: استدعي initParticles() في useEffect في App.js أو index.js

export function initParticles() {
  // إنشاء الـ canvas لو مش موجود
  let canvas = document.getElementById("particles-canvas");
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "particles-canvas";
    document.body.prepend(canvas);
  }

  const ctx = canvas.getContext("2d");
  let animationId;
  let particles = [];

  // ضبط حجم الـ canvas
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  // دالة اختيار لون الـ particles حسب الـ dark mode
  const getColor = () => {
    const dark = document.body.classList.contains("dark-mode");
    const colors = dark
      ? ["102,126,234", "118,75,162", "240,147,251", "79,172,254"]
      : ["15,125,236", "102,126,234", "118,75,162", "79,172,254"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // إنشاء particle واحدة
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2.5 + 1;
      this.color = getColor();
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // ارتداد من الحواف
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();
    }
  }

  // إنشاء الـ particles
  const COUNT = 200;
  for (let i = 0; i < COUNT; i++) {
    particles.push(new Particle());
  }

  // رسم الخطوط بين الـ particles القريبة
  const drawLines = () => {
    const MAX_DIST = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MAX_DIST) {
          const opacity = (1 - dist / MAX_DIST) * 0.18;
          const dark = document.body.classList.contains("dark-mode");
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = dark
            ? `rgba(102,126,234,${opacity})`
            : `rgba(15,125,236,${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  };

  // Loop الرئيسي
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    drawLines();
    animationId = requestAnimationFrame(animate);
  };

  animate();

  // تنظيف عند unmount
  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resize);
    canvas.remove();
  };
}

export default initParticles;