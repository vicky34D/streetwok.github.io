// ===== STREETWOK — App Logic =====

const phoneNumber = "916290591422";

// ===== IMAGE MAP =====
const img = {
  alooTikki:     "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
  smashChicken:  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  momoBurger:    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80",
  zinger:        "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80",
  fries:         "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
  periFries:     "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80",
  loadedFries:   "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80",
  periStrips:    "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=600&q=80",
  popcorn:       "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
  saucyPopcorn:  "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80",
  mozzarella:    "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=600&q=80",
  wings:         "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
  springRoll:    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
  nuggets:       "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
  panFriedMomo:  "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80",
  steamChicken:  "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80",
  friedChicken:  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
  steamVeg:      "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80",
  friedVeg:      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
  chai:          "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&q=80",
  coffee:        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
  saverCombo:    "https://images.unsplash.com/photo-1625938144755-652e08e359b7?auto=format&fit=crop&w=600&q=80",
  craverCombo:   "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80",
  buddyCombo:    "https://images.unsplash.com/photo-1610970878459-a0e464d7592b?auto=format&fit=crop&w=600&q=80",
  familyBox:     "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80",
  crunchyBox:    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
  veggieBox:     "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=600&q=80"
};

// ===== MENU DATA =====
const menuData = [
  // Burgers
  { cat: "Burgers", name: "Aloo Tikki Burger",      price: 69,  desc: "Classic veg patty with cafe sauce.",         img: img.alooTikki,    veg: true,  addon: true },
  { cat: "Burgers", name: "Smash Chicken Burger",   price: 89,  desc: "Juicy chicken, crisp edges, big bite.",     img: img.smashChicken, addon: true },
  { cat: "Burgers", name: "Momo Burger",            price: 79,  desc: "Streetwok-style momo stuffed burger.",      img: img.momoBurger,   addon: true },
  { cat: "Burgers", name: "Zinger Burger",          price: 79,  desc: "Crispy fillet with spicy crunch.",          img: img.zinger,       addon: true },

  // Fries
  { cat: "Fries", name: "Regular Fries",            price: 49,  desc: "Hot salted golden fries.",                  img: img.fries,        veg: true },
  { cat: "Fries", name: "Fries Large",              price: 79,  desc: "Bigger shareable portion.",                 img: img.fries,        veg: true },
  { cat: "Fries", name: "Peri Peri Fries — Small",  price: 79,  desc: "Fries tossed in peri peri spice.",          img: img.periFries,    veg: true },
  { cat: "Fries", name: "Peri Peri Fries — Large",  price: 119, desc: "Large peri peri fries.",                    img: img.periFries,    veg: true },
  { cat: "Fries", name: "Loaded Fries",             price: 149, desc: "Fries topped with cheese & bold sauces.",   img: img.loadedFries,  veg: true, popular: true },

  // Chicken
  { cat: "Chicken", name: "Peri Peri Strips (4 pcs)", price: 109, desc: "Crispy strips with peri peri heat.",      img: img.periStrips,   addon: true, popular: true },
  { cat: "Chicken", name: "Peri Peri Strips (6 pcs)", price: 149, desc: "More strips for the table.",              img: img.periStrips,   addon: true },
  { cat: "Chicken", name: "Chicken Popcorn",          price: 59,  desc: "Crunchy bite-size chicken.",               img: img.popcorn,      addon: true },
  { cat: "Chicken", name: "Maxi Chicken Popcorn",     price: 99,  desc: "Bigger popcorn portion.",                  img: img.popcorn,      addon: true },
  { cat: "Chicken", name: "Saucy Popcorn",            price: 79,  desc: "Popcorn chicken tossed in sauce.",         img: img.saucyPopcorn, addon: true },
  { cat: "Chicken", name: "Maxi Saucy Popcorn",       price: 129, desc: "Bigger saucy popcorn chicken.",            img: img.saucyPopcorn, addon: true },
  { cat: "Chicken", name: "Fried Wings (4 pcs)",      price: 149, desc: "Crispy golden fried wings.",               img: img.wings,        addon: true },
  { cat: "Chicken", name: "Fried Wings (8 pcs)",      price: 249, desc: "Full wings box for sharing.",              img: img.wings,        addon: true },

  // Momos
  { cat: "Momos", name: "Pan Fried Momo (5 pcs)",   price: 99,  desc: "Pan tossed momos with masala finish.",     img: img.panFriedMomo, popular: true },
  { cat: "Momos", name: "Steam Chicken Momo",       price: 69,  desc: "Soft steamed chicken momos.",              img: img.steamChicken, addon: true },
  { cat: "Momos", name: "Fried Chicken Momo",       price: 79,  desc: "Deep-fried crispy chicken momos.",         img: img.friedChicken, addon: true },
  { cat: "Momos", name: "Steam Veg Momo",           price: 59,  desc: "Steamed vegetarian momos.",                img: img.steamVeg,     veg: true, addon: true },
  { cat: "Momos", name: "Fried Veg Momo",           price: 69,  desc: "Deep-fried veggie momos.",                 img: img.friedVeg,     veg: true, addon: true },

  // Snacks
  { cat: "Snacks", name: "Mozzarella Sticks (5 pcs)", price: 69,  desc: "Melty golden cheese sticks.",            img: img.mozzarella,   veg: true, addon: true },
  { cat: "Snacks", name: "Mozzarella Sticks (10 pcs)",price: 129, desc: "Double cheese sticks.",                   img: img.mozzarella,   veg: true, addon: true },
  { cat: "Snacks", name: "Spring Roll (3 pcs)",       price: 69,  desc: "Crisp rolls with tangy dip.",             img: img.springRoll,   veg: true, addon: true },
  { cat: "Snacks", name: "Spring Roll (6 pcs)",       price: 129, desc: "Shareable spring rolls.",                  img: img.springRoll,   veg: true, addon: true },
  { cat: "Snacks", name: "Potato Nuggets — Small",    price: 59,  desc: "Golden crispy potato bites.",              img: img.nuggets,      veg: true, addon: true },
  { cat: "Snacks", name: "Potato Nuggets — Large",    price: 109, desc: "Large potato nuggets portion.",             img: img.nuggets,      veg: true, addon: true },

  // Drinks
  { cat: "Drinks", name: "Chai — Small",             price: 15,  desc: "Freshly brewed classic chai.",             img: img.chai,         veg: true },
  { cat: "Drinks", name: "Chai — Large",             price: 25,  desc: "Large hot chai.",                          img: img.chai,         veg: true },
  { cat: "Drinks", name: "Hot Coffee — Small",       price: 30,  desc: "Rich & bold hot coffee.",                  img: img.coffee,       veg: true },
  { cat: "Drinks", name: "Hot Coffee — Large",       price: 60,  desc: "Large hot coffee.",                        img: img.coffee,       veg: true },
  { cat: "Drinks", name: "Black Coffee — Small",     price: 25,  desc: "Pure black coffee, no milk.",              img: img.coffee,       veg: true },
  { cat: "Drinks", name: "Black Coffee — Large",     price: 50,  desc: "Large black coffee.",                      img: img.coffee,       veg: true }
];

// ===== COMBOS =====
const combos = [
  { name: "Streetwok Signature",   price: 199, desc: "Peri Peri Strips (4 pcs) + Loaded Fries",                                   img: img.periStrips,  featured: true, badge: "SIGNATURE" },
  { name: "Saver Combo",          price: 129, desc: "Veg Burger (Aloo Tikki) + Regular Fries + Small Chai",                       img: img.saverCombo,  badge: "BEST VALUE" },
  { name: "Chicken Craver",       price: 159, desc: "Smash Chicken / Zinger Burger + Regular Fries + Small Chai",                 img: img.craverCombo },
  { name: "Momo Lover",           price: 139, desc: "Steam Chicken Momo + Regular Fries + Small Chai",                            img: img.steamChicken },
  { name: "Crunchy Chicken Box",  price: 149, desc: "Chicken Popcorn + Fried Wings (2 pcs) + Regular Fries",                      img: img.crunchyBox },
  { name: "Buddy Combo",          price: 249, desc: "Any 2 Burgers + Large Fries",                                                img: img.buddyCombo },
  { name: "Family Snack Box",     price: 399, desc: "Peri Peri Strips (6) + Chicken Popcorn + Fried Wings (4) + Large Fries",     img: img.familyBox,   badge: "FAMILY" },
  { name: "Veggie Snack Box",     price: 149, desc: "Mozzarella Cheese Sticks + Potato Nuggets + Regular Fries",                  img: img.veggieBox,   badge: "VEG" }
];

// ===== DOM REFS =====
const sidebarNav    = document.getElementById("sidebarNav");
const menuContent   = document.getElementById("menuContent");
const comboGrid     = document.getElementById("comboGrid");
const bucket        = document.getElementById("bucket");
const bucketToggle  = document.getElementById("bucketToggle");
const bucketCount   = document.getElementById("bucketCount");
const bucketTotal   = document.getElementById("bucketTotal");
const bucketItems   = document.getElementById("bucketItems");
const clearBucket   = document.getElementById("clearBucket");
const whatsappOrder = document.getElementById("whatsappOrder");
const hamburger     = document.getElementById("hamburger");
const mainNav       = document.getElementById("mainNav");
const topHeader     = document.getElementById("topHeader");

let cart = [];

// ===== HELPERS =====
function money(v) { return "₹" + v; }

function getCategories() {
  return [...new Set(menuData.map(i => i.cat))];
}

function getCategoryItems(cat) {
  return menuData.filter(i => i.cat === cat);
}

// ===== RENDER SIDEBAR =====
function renderSidebar() {
  const cats = getCategories();
  sidebarNav.innerHTML = cats.map((cat, i) => {
    const count = getCategoryItems(cat).length;
    return `<button class="sidebar-link${i === 0 ? " active" : ""}" data-cat="${cat}">
      ${cat}
      <span class="cat-count">${count}</span>
    </button>`;
  }).join("");
}

// ===== RENDER FULL MENU =====
function renderMenu() {
  const cats = getCategories();
  menuContent.innerHTML = cats.map(cat => {
    const items = getCategoryItems(cat);
    return `
      <div class="cat-section" id="cat-${cat.toLowerCase().replace(/\s/g, "-")}">
        <div class="cat-header">
          <h3>${cat}</h3>
          <span class="item-count">${items.length} items</span>
        </div>
        <div class="menu-grid">
          ${items.map(item => menuCardHTML(item)).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function menuCardHTML(item) {
  let badge = "";
  if (item.popular) badge = `<span class="card-badge popular">Popular</span>`;
  else if (item.veg) badge = `<span class="card-badge veg">Veg</span>`;
  else if (item.addon) badge = `<span class="card-badge addon">+Fries @39</span>`;

  const typeClass = item.veg ? "veg" : "non-veg";

  return `
    <article class="menu-card">
      <div class="card-img-wrap">
        ${badge}
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        <button class="add-circle" type="button" data-name="${item.name}" data-price="${item.price}" aria-label="Add ${item.name}">+</button>
      </div>
      <div class="card-body">
        <h4>${item.name}</h4>
        <p class="card-desc">${item.desc}</p>
        <div class="card-meta">
          <span class="card-price">${money(item.price)}</span>
          <span class="card-type">
            <span class="type-dot ${typeClass}"></span>
            ${item.veg ? "Veg" : "Non-Veg"}
          </span>
        </div>
      </div>
    </article>
  `;
}

// ===== RENDER COMBOS =====
function renderCombos() {
  comboGrid.innerHTML = combos.map(c => {
    return `
      <article class="combo-card${c.featured ? " featured" : ""}">
        <div class="card-img-wrap">
          ${c.badge ? `<span class="combo-badge">${c.badge}</span>` : ""}
          <img src="${c.img}" alt="${c.name}" loading="lazy" />
        </div>
        <div class="combo-body">
          <h4>${c.name}</h4>
          <p class="combo-desc">${c.desc}</p>
          <div class="combo-footer">
            <span class="combo-price">${money(c.price)}</span>
            <button class="combo-add" type="button" data-name="${c.name}" data-price="${c.price}">Add</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ===== CART =====
function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) existing.qty += 1;
  else cart.push({ name, price, qty: 1 });
  renderCart();
  bucket.classList.add("open");
}

function updateQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.name !== name);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  bucketCount.textContent = count;
  bucketTotal.textContent = money(total);
  bucket.classList.toggle("has-items", count > 0);

  if (cart.length) {
    bucketItems.innerHTML = cart.map(i => `
      <li class="bucket-item">
        <div>
          <strong>${i.name}</strong>
          <span>${money(i.price)} each</span>
        </div>
        <div class="qty">
          <button type="button" data-qty-name="${i.name}" data-qty-delta="-1" aria-label="Remove one">−</button>
          <b>${i.qty}</b>
          <button type="button" data-qty-name="${i.name}" data-qty-delta="1" aria-label="Add one">+</button>
        </div>
      </li>
    `).join("");
  } else {
    bucketItems.innerHTML = `<li class="bucket-item"><div><strong>Your bucket is empty</strong><span>Add items from the menu above.</span></div></li>`;
  }

  // WhatsApp link
  if (cart.length) {
    const lines = cart.map(i => `${i.qty} x ${i.name} — ${money(i.price * i.qty)}`);
    const msg = encodeURIComponent(`Hi Streetwok! I'd like to order:\n${lines.join("\n")}\n\nTotal: ${money(total)}`);
    whatsappOrder.href = `https://wa.me/${phoneNumber}?text=${msg}`;
  } else {
    whatsappOrder.href = `https://wa.me/${phoneNumber}`;
  }
}

// ===== EVENT LISTENERS =====

// Delegated click handler
document.addEventListener("click", (e) => {
  // Add to cart (circular + button or combo Add)
  const addBtn = e.target.closest(".add-circle, .combo-add");
  if (addBtn) {
    addToCart(addBtn.dataset.name, Number(addBtn.dataset.price));
    return;
  }

  // Quantity buttons in cart
  const qtyBtn = e.target.closest("[data-qty-name]");
  if (qtyBtn) {
    updateQty(qtyBtn.dataset.qtyName, Number(qtyBtn.dataset.qtyDelta));
    return;
  }

  // Sidebar category click
  const sideLink = e.target.closest(".sidebar-link");
  if (sideLink) {
    const cat = sideLink.dataset.cat;
    // Update active state
    document.querySelectorAll(".sidebar-link").forEach(l => l.classList.remove("active"));
    sideLink.classList.add("active");
    // Scroll to section
    const target = document.getElementById("cat-" + cat.toLowerCase().replace(/\s/g, "-"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    return;
  }
});

// Bucket toggle
bucketToggle.addEventListener("click", () => {
  bucket.classList.toggle("open");
});

// Clear cart
clearBucket.addEventListener("click", () => {
  cart = [];
  renderCart();
});

// Hamburger menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mainNav.classList.toggle("open");
});

// Close mobile nav on link click
mainNav.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mainNav.classList.remove("open");
  });
});

// Header scroll effect
let lastY = 0;
window.addEventListener("scroll", () => {
  topHeader.classList.toggle("scrolled", window.scrollY > 10);
  lastY = window.scrollY;
}, { passive: true });

// Sidebar scroll spy — highlight active category as user scrolls
const observerOptions = {
  root: null,
  rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) + parseInt(getComputedStyle(document.documentElement).getPropertyValue("--banner-h")) + 30}px 0px -40% 0px`,
  threshold: 0
};

function setupScrollSpy() {
  const sections = document.querySelectorAll(".cat-section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.querySelectorAll(".sidebar-link").forEach(link => {
          const cat = link.dataset.cat.toLowerCase().replace(/\s/g, "-");
          link.classList.toggle("active", "cat-" + cat === id);
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

// ===== INIT =====
renderSidebar();
renderMenu();
renderCombos();
renderCart();
setupScrollSpy();
