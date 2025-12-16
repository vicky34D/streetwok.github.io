// app.js - StreetWok Himalayan Snow Ride
(function () {
  const container = document.getElementById('canvas-container');

  let scene, camera, renderer;
  let terrain;
  let snowParticles;

  // Animation Globals
  let time = 0;
  let mouse = { x: 0, y: 0 };
  let targetCamX = 0;
  let targetCamY = 0;

  const width = window.innerWidth;
  const height = window.innerHeight;

  function init3D() {
    scene = new THREE.Scene();

    // Bright Snow Fog
    scene.fog = new THREE.FogExp2(0xddeeff, 0.002);

    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 40, 100);
    camera.lookAt(0, 10, -100);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true; // Enable shadows for riders
    container.appendChild(renderer.domElement);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 0.8);
    sunLight.position.set(100, 200, 100);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);


    // --- SNOW TERRAIN ---
    // High poly for smooth snow dunes
    const geometry = new THREE.PlaneGeometry(800, 800, 80, 80);
    const pos = geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      let z = 0;
      // Smooth rolling hills
      z += Math.sin(x * 0.01) * 20;
      z += Math.cos(y * 0.01) * 20;
      z += Math.sin(x * 0.05 + y * 0.05) * 5;

      pos.setZ(i, z);
    }

    geometry.computeVertexNormals();
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff, // Snow White
      roughness: 0.8,
      metalness: 0.1,
      // Emissive slightly blue for snow shadow glow
      emissive: 0xccddff,
      emissiveIntensity: 0.2
    });

    terrain = new THREE.Mesh(geometry, material);
    terrain.position.y = -30;
    terrain.receiveShadow = true;
    scene.add(terrain);


    // --- FALLING SNOW ---
    const snowGeo = new THREE.BufferGeometry();
    const snowCount = 4000;
    const snowPos = [];
    for (let i = 0; i < snowCount; i++) {
      snowPos.push(
        (Math.random() - 0.5) * 600,
        Math.random() * 400 - 100,
        (Math.random() - 0.5) * 600
      );
    }
    snowGeo.setAttribute('position', new THREE.Float32BufferAttribute(snowPos, 3));
    const snowMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      transparent: true,
      opacity: 0.8
    });
    snowParticles = new THREE.Points(snowGeo, snowMat);
    scene.add(snowParticles);
  }

  function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    // --- MOVEMENT ---
    // Terrain moves backward (z increases)
    terrain.position.z += 0.5;
    if (terrain.position.z > 200) terrain.position.z = 0;

    // Snow falling
    const sn = snowParticles.geometry.attributes.position.array;
    for (let i = 1; i < sn.length; i += 3) {
      sn[i] -= 0.5; // Fall down
      if (sn[i] < -50) sn[i] = 200; // Reset to top
    }
    snowParticles.geometry.attributes.position.needsUpdate = true;
    // Wind effect
    snowParticles.position.x = Math.sin(time * 0.5) * 10;


    // --- CAMERA ---
    targetCamX = (mouse.x - width / 2) * 0.02;
    targetCamY = (mouse.y - height / 2) * 0.02;

    // Camera follows slightly but stays focused on journey
    camera.position.x += (targetCamX - camera.position.x) * 0.02;
    camera.position.y += (targetCamY + 40 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, -100);

    renderer.render(scene, camera);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onMouseMove(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  }

  if (container) {
    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove);
    init3D();
    animate();
  }

  // --- CART LOGIC ---
  const cartPanel = document.getElementById('cartPanel');
  const cartHeader = document.getElementById('cartHeader');
  const cartCountEl = document.getElementById('cartCount');
  const cartTotalEl = document.getElementById('cartTotal');
  const cartFinalTotalEl = document.getElementById('cartFinalTotal');
  const cartItemsList = document.getElementById('cartItemsList');
  const toggleCartBtn = document.getElementById('toggleCartBtn');

  // State
  let cart = []; // Array of objects: { name, price, element }

  function updateCartUI() {
    // 1. Update Summary
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const count = cart.length;

    cartCountEl.innerText = `${count} ITEMS`;
    cartTotalEl.innerText = `₹${total}`;
    cartFinalTotalEl.innerText = `₹${total}`;

    // 2. Visibility
    if (count > 0) {
      cartPanel.classList.add('visible');
    } else {
      cartPanel.classList.remove('visible');
      cartPanel.classList.remove('expanded'); // Auto collapse if empty
      toggleCartBtn.innerHTML = 'VIEW CART &uarr;';
    }

    // 3. Render Items
    cartItemsList.innerHTML = '';
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="item-price">₹${item.price}</span>
        <button class="remove-item-btn" data-index="${index}">REMOVE</button>
      `;
      cartItemsList.appendChild(li);
    });

    // 4. Attach Listeners to new Remove Buttons
    const removeBtns = cartItemsList.querySelectorAll('.remove-item-btn');
    removeBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.index);
        removeFromCart(idx);
      });
    });
  }

  function addToCart(name, price, element) {
    cart.push({ name, price, element });
    updateCartUI();
  }

  function removeFromCart(index) {
    const item = cart[index];
    // Deselect the original menu item
    if (item.element) {
      item.element.classList.remove('selected');
    }
    // Remove from array
    cart.splice(index, 1);
    updateCartUI();
  }

  // Toggle Cart Expansion
  if (cartHeader) {
    cartHeader.addEventListener('click', () => {
      cartPanel.classList.toggle('expanded');
      const isExpanded = cartPanel.classList.contains('expanded');
      toggleCartBtn.innerHTML = isExpanded ? 'CLOSE &darr;' : 'VIEW CART &uarr;';
    });
  }

  // Menu Item Selection Interaction
  const menuItems = document.querySelectorAll('.menu-list li');
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      // Toggle selected state visually checked by class
      const isSelected = item.classList.contains('selected');

      // Parse Info
      const nameEl = item.querySelector('span:first-child');
      const name = nameEl ? nameEl.innerText.split(' - ')[0] : 'Item'; // Simple name

      const priceElement = item.querySelector('.price');
      if (priceElement) {
        const text = priceElement.innerText;
        const match = text.match(/(\d+)/);
        if (match) {
          const price = parseInt(match[0], 10);

          if (!isSelected) {
            // Select and Add
            item.classList.add('selected');
            addToCart(name, price, item);
          } else {
            // Deselect and Remove (find first instance in cart)
            item.classList.remove('selected');
            const idx = cart.findIndex(c => c.element === item);
            if (idx > -1) {
              // We call splice directly here to avoid re-triggering class removal loop
              cart.splice(idx, 1);
              updateCartUI();
            }
          }
        }
      }
    });
  });

  // Ride List Selection Interaction
  const rideItems = document.querySelectorAll('.ride-list li');
  rideItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
    });
  });

  // UI LOGIC (Preserved)
  const menuBtn = document.getElementById('menuBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  const closeMenu = document.getElementById('closeMenu');

  const aboutBtn = document.getElementById('aboutBtn');
  const aboutOverlay = document.getElementById('aboutOverlay');
  const closeAbout = document.getElementById('closeAbout');

  function openOverlay(overlay) { if (overlay) overlay.classList.add('active'); }
  function closeOverlay(overlay) { if (overlay) overlay.classList.remove('active'); }

  if (menuBtn) menuBtn.addEventListener('click', () => openOverlay(menuOverlay));
  if (closeMenu) closeMenu.addEventListener('click', () => closeOverlay(menuOverlay));
  if (aboutBtn) aboutBtn.addEventListener('click', () => openOverlay(aboutOverlay));
  if (closeAbout) closeAbout.addEventListener('click', () => closeOverlay(aboutOverlay));
  [menuOverlay, aboutOverlay].forEach(overlay => {
    if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(overlay); });
  });

})();
