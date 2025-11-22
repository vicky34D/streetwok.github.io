// app.js - StreetWok Wave Effect
(function () {
  const canvas = document.getElementById('waveCanvas');
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];

  // Configuration
  const gap = 50; // Distance between dots
  const radius = 1.5; // Dot size
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
    }

    update() {
      // Calculate distance from mouse
      const dx = mouse.x - this.originX;
      const dy = mouse.y - this.originY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Wave effect calculation
      // If within radius, push down/up based on distance
      if (dist < waveRadius) {
        const angle = Math.atan2(dy, dx);
        const force = (waveRadius - dist) / waveRadius;

        // Create a ripple/wave effect
        // We move Y position based on sine wave of distance
        const wave = Math.sin(dist * 0.05 - Date.now() * 0.005) * waveHeight * force;

        this.y = this.originY + wave;

        // Make area clear: Fade out based on proximity
        // force is 1 at center (mouse), 0 at edge.
        const alpha = Math.max(0, 1 - force * 1.2);

        // Use Orange color for the wave, but fade it out
        this.color = `rgba(255, 77, 0, ${alpha})`;

      } else {
        // Return to original
        this.y += (this.originY - this.y) * 0.1;
        this.color = '#2d2d2d';
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
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
      const time = Date.now() * 0.001;
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
