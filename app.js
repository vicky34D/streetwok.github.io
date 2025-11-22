// app.js - StreetWok Wave Effect
(function () {
  const canvas = document.getElementById('waveCanvas');
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];

  // Configuration
  const gap = 80; // Distance between lines (increased for fewer lines)
  const radius = 1.5; // Dot size (not used for lines)
  const waveHeight = 60; // Max height of wave
  const waveRadius = 250; // Radius of mouse influence

  let mouse = { x: -1000, y: -1000 };
  let isHovering = false;

  // Particle Class
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.originX = x;
      this.originY = y;
      this.color = '#2d2d2d'; // Default dark gray
      this.baseLength = 2; // Very small base length
      this.currentLength = this.baseLength;

      // Calculate angle pointing toward center of screen
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      this.angle = Math.atan2(centerY - y, centerX - x);
    }

    update() {
      // Calculate distance from mouse
      const dx = mouse.x - this.originX;
      const dy = mouse.y - this.originY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Jellyfish-like flowing motion
      const time = Date.now() * 0.002;
      const flowX = Math.sin(time + this.originY * 0.01) * 3;
      const flowY = Math.cos(time + this.originX * 0.01) * 3;

      this.x = this.originX + flowX;
      this.y = this.originY + flowY;

      // Squish/Expand Animation (Line Length)
      const pulse = Math.sin(time * 2 + this.originX * 0.05 + this.originY * 0.05);

      // Length varies: "Squish" (short) to "Expand" (long)
      this.currentLength = this.baseLength * (1 + pulse * 0.6);

      // Wave effect calculation
      if (dist < waveRadius) {
        const angle = Math.atan2(dy, dx);
        const force = (waveRadius - dist) / waveRadius;

        // Create a ripple/wave effect
        const wave = Math.sin(dist * 0.05 - Date.now() * 0.005) * waveHeight * force;
        this.y += wave;

        // Expand significantly when wave hits
        this.currentLength += force * 12;

        // Make area clear & color change
        const alpha = Math.max(0, 1 - force * 1.2);
        this.color = `rgba(255, 77, 0, ${alpha})`;

      } else {
        this.color = '#2d2d2d';
      }
    }

    draw() {
      ctx.beginPath();

      // Calculate line end points based on angle and length
      const cos = Math.cos(this.angle);
      const sin = Math.sin(this.angle);
      const len = Math.max(0, this.currentLength);

      // Draw line centered at x,y
      ctx.moveTo(this.x - (cos * len), this.y - (sin * len));
      ctx.lineTo(this.x + (cos * len), this.y + (sin * len));

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 1; // Thinner lines
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }

  function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    particles = [];

    // Create grid of particles
    // We only need enough to fill the screen
    // Center the grid
    const cols = Math.ceil(width / gap);
    const rows = Math.ceil(height / gap);

    const startX = (width - cols * gap) / 2;
    const startY = (height - rows * gap) / 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        // Randomize position slightly to break the grid lines
        const randX = (Math.random() - 0.5) * gap * 0.8;
        const randY = (Math.random() - 0.5) * gap * 0.8;

        const x = startX + i * gap + randX;
        const y = startY + j * gap + randY;

        // Calculate distance from center of screen
        const dx = x - width / 2;
        const dy = y - height / 2;

        // Oval exclusion zone
        // We want particles ONLY outside the oval
        const radiusX = 380; // Horizontal radius
        const radiusY = 220; // Vertical radius

        // Ellipse equation: (x²/a²) + (y²/b²) > 1 means outside
        if ((dx * dx) / (radiusX * radiusX) + (dy * dy) / (radiusY * radiusY) > 1) {
          particles.push(new Particle(x, y));
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Automatic movement if not hovering
    if (!isHovering) {
      const time = Date.now() * 0.0003; // Slower speed
      // Figure-8 / Lissajous pattern
      mouse.x = width / 2 + Math.sin(time) * (width / 3);
      mouse.y = height / 2 + Math.cos(time * 1.3) * (height / 3);
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  // Event Listeners
  window.addEventListener('resize', init);
  window.addEventListener('mousemove', (e) => {
    isHovering = true;
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // Parallax Effect for Background
    // Only on desktop
    if (window.innerWidth > 768) {
      const moveX = (e.clientX - width / 2) * 0.02;
      const moveY = (e.clientY - height / 2) * 0.02;

      // We target the background overlay by changing the container's perspective or transform
      // Since the background is a pseudo-element of .center-content, we can't move it directly.
      // However, we can move the .center-content slightly to give a floating feel.
      const content = document.querySelector('.center-content');
      if (content) {
        content.style.transform = `translate(calc(-50% + ${-moveX}px), calc(-50% + ${-moveY}px))`;
      }
    }
  });
  window.addEventListener('mouseout', () => {
    isHovering = false;
  });

  // Menu Logic
  const menuBtn = document.getElementById('menuBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenu = document.getElementById('closeMenu');

  // About Logic
  const aboutBtn = document.getElementById('aboutBtn');
  const aboutOverlay = document.getElementById('aboutOverlay');
  const closeAbout = document.getElementById('closeAbout');

  if (menuBtn && menuOverlay && closeMenu) {
    menuBtn.addEventListener('click', () => {
      menuOverlay.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
      menuOverlay.classList.remove('active');
    });

    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
      }
    });
  }

  if (aboutBtn && aboutOverlay && closeAbout) {
    aboutBtn.addEventListener('click', () => {
      aboutOverlay.classList.add('active');
    });

    closeAbout.addEventListener('click', () => {
      aboutOverlay.classList.remove('active');
    });

    aboutOverlay.addEventListener('click', (e) => {
      if (e.target === aboutOverlay) {
        aboutOverlay.classList.remove('active');
      }
    });
  }

  // Initialize
  init();
  animate();

})();
