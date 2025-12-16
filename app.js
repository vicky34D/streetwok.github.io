// app.js - StreetWok 3D Experience
(function () {
  // --- 3D SCENE SETUP ---
  const container = document.getElementById('canvas-container');

  // Scene globals
  let scene, camera, renderer;
  let gridTop, gridBottom;
  let particles;

  // Interaction globals
  let mouse = { x: 0, y: 0 };
  let targetRotation = { x: 0, y: 0 };
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  function init3D() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Matches --bg: #ffffff
    // Add some fog for depth - using a light grey/orange tint
    scene.fog = new THREE.FogExp2(0xffffff, 0.002);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 200;
    camera.position.y = 50;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // --- OBJECTS ---

    // 1. The "Road" Grid
    // We create two grids to simulate a ceiling and floor or just a floor
    // Let's do a floor grid that moves

    // Grid Helper: size, divisions, colorCenterLine, colorGrid
    // StreetWok colors: Primary #ff4d00 (Orange), Accent #ffcc00 (Yellow), Secondary #2d2d2d
    const gridSize = 2000;
    const gridDivisions = 60;

    // Floor Grid
    gridBottom = new THREE.GridHelper(gridSize, gridDivisions, 0xff4d00, 0xdddddd);
    gridBottom.position.y = -50;
    scene.add(gridBottom);

    // Ceiling Grid (optional, for tunnel effect)
    gridTop = new THREE.GridHelper(gridSize, gridDivisions, 0xff4d00, 0xdddddd);
    gridTop.position.y = 150;
    scene.add(gridTop);

    // 2. Floating Particles (Sparks/Embers)
    const particleCount = 400;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];

    const color1 = new THREE.Color(0xff4d00); // Orange
    const color2 = new THREE.Color(0xffcc00); // Yellow
    const color3 = new THREE.Color(0x2d2d2d); // Dark Grey

    for (let i = 0; i < particleCount; i++) {
      // Random positions
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 500;
      const z = (Math.random() - 0.5) * 1000;
      positions.push(x, y, z);

      // Random colors
      const type = Math.random();
      let color;
      if (type < 0.33) color = color1;
      else if (type < 0.66) color = color2;
      else color = color3;

      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Lights (mostly for effect if we add meshes later, grids don't need light)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
  }

  function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    // Move Grids to simulate speed
    // The grid segment size is gridSize / gridDivisions = 2000 / 60 ≈ 33.33
    const gridSegment = 2000 / 60;
    const gridSpeed = 2; // Speed of movement

    if (gridBottom) {
      gridBottom.position.z += gridSpeed;
      if (gridBottom.position.z > gridSegment) {
        gridBottom.position.z = 0;
      }
    }

    if (gridTop) {
      gridTop.position.z += gridSpeed;
      if (gridTop.position.z > gridSegment) {
        gridTop.position.z = 0;
      }
    }

    // Let's move particles towards camera to simulate driving through themove camera or move grid and wrap

    // Let's move particles towards camera to simulate driving through them
    const positions = particles.geometry.attributes.position.array;
    for (let i = 2; i < positions.length; i += 3) {
      positions[i] += 2; // Move speed
      if (positions[i] > 300) {
        positions[i] = -700; // Reset to far back
      }
    }
    particles.geometry.attributes.position.needsUpdate = true;

    // Rotate particles slightly for dynamic feel
    particles.rotation.z = time * 0.05;

    // Camera Interaction
    // Smooth follow mouse
    targetRotation.x = (mouse.x - windowHalfX) * 0.0005;
    targetRotation.y = (mouse.y - windowHalfY) * 0.0005;

    camera.rotation.x += 0.05 * (targetRotation.y - camera.rotation.x);
    camera.rotation.y += 0.05 * (-targetRotation.x - camera.rotation.y);

    // Subtle sway
    camera.position.x += Math.sin(time) * 0.5;
    camera.position.y += Math.cos(time * 0.8) * 0.5;

    renderer.render(scene, camera);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onDocumentMouseMove(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    // Also keep the CSS parallax effect if desired, or remove it. 
    // The previous CSS parallax was nice, let's keep it but mapped to 3D now.
  }

  // Initialize 3D
  if (container) {
    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    init3D();
    animate();
  }


  // --- UI LOGIC (PRESERVED) ---

  // Menu Logic
  const menuBtn = document.getElementById('menuBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenu = document.getElementById('closeMenu');

  // Menu Item Selection Interaction
  const menuItems = document.querySelectorAll('.menu-list li');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // Toggle selected state
      item.classList.toggle('selected');
    });
  });

  // Ride List Selection Interaction
  const rideItems = document.querySelectorAll('.ride-list li');
  rideItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
    });
  });

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

})();
