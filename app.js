const phoneNumber = "916290591422";

const images = {
  alooTikkiBurger: "images/aloo-tikki-burger.jpg",
  smashChickenBurger: "images/smash-chicken-burger.jpg",
  momoBurger: "images/momo-burger.jpg",
  zingerBurger: "images/zinger-burger.jpg",
  fries: "images/regular-fries.jpg",
  periFries: "images/peri-peri-fries.jpg",
  loadedFries: "images/loaded-fries.jpg",
  periStrips: "images/peri-peri-strips.jpg",
  chai: "images/chai.jpg",
  coffee: "images/coffee.jpg",
  popcorn: "images/popcorn-chicken.jpg",
  saucyPopcorn: "images/saucy-popcorn.jpg",
  mozzarella: "images/mozzarella-sticks.jpg",
  wings: "images/fried-wings.jpg",
  panFriedMomo: "images/pan-fried-momo.jpg",
  springRoll: "images/spring-rolls.jpg",
  potatoNuggets: "images/potato-nuggets.jpg",
  steamChickenMomo: "images/steamed-chicken-momo.jpg",
  friedChickenMomo: "images/fried-chicken-momo.jpg",
  steamVegMomo: "images/steamed-veg-momo.jpg",
  friedVegMomo: "images/fried-veg-momo.jpg",
  saverCombo: "images/saver-combo.jpg",
  chickenCraverCombo: "images/chicken-craver-combo.jpg",
  buddyCombo: "images/buddy-combo.jpg",
  familySnackBox: "images/family-snack-box.jpg",
  signatureCombo: "images/signature-combo.jpg",
  momoLoverCombo: "images/momo-lover-combo.jpg",
  crunchyChickenBox: "images/crunchy-chicken-box.jpg",
  veggieSnackBox: "images/veggie-snack-box.jpg"
};

const combos = [
  { name: "Streetwok Signature Combo", price: 199, desc: "Peri Peri Strips (4 pcs) + Loaded Fries", image: images.signatureCombo, featured: true },
  { name: "Saver Combo", price: 129, desc: "Veg Burger (Aloo Tikki), Regular Fries, Small Chai", image: images.saverCombo },
  { name: "Chicken Craver Combo", price: 159, desc: "Smash Chicken or Zinger Burger, Regular Fries, Small Chai", image: images.chickenCraverCombo },
  { name: "Momo Lover Combo", price: 139, desc: "Steam Chicken Momo, Regular Fries, Small Chai", image: images.momoLoverCombo },
  { name: "Crunchy Chicken Box", price: 149, desc: "Chicken Popcorn, Fried Wings (2 pcs), Regular Fries", image: images.crunchyChickenBox },
  { name: "Buddy Combo", price: 249, desc: "Any 2 Burgers + Large Fries", image: images.buddyCombo },
  { name: "Veggie Snack Box", price: 149, desc: "Mozzarella Cheese Sticks, Potato Nuggets, Regular Fries", image: images.veggieSnackBox },
  { name: "Family Snack Box", price: 399, desc: "Peri Peri Strips (6 pcs), Chicken Popcorn, Fried Wings (4 pcs), Large Fries", image: images.familySnackBox }
];

const menu = [
  { category: "Burgers", name: "Aloo Tikki Burger", price: 69, desc: "Classic veg patty with cafe sauce.", image: images.alooTikkiBurger, badge: "Add fries @39" },
  { category: "Burgers", name: "Smash Chicken Burger", price: 89, desc: "Juicy chicken, crisp edges, big bite.", image: images.smashChickenBurger, badge: "Add fries @39" },
  { category: "Burgers", name: "Momo Burger", price: 79, desc: "Streetwok-style momo stuffed burger.", image: images.momoBurger, badge: "Add fries @39" },
  { category: "Burgers", name: "Zinger Burger", price: 79, desc: "Crispy fillet with spicy crunch.", image: images.zingerBurger, badge: "Add fries @39" },

  { category: "Fries", name: "Regular Fries", price: 49, desc: "Hot salted fries.", image: images.fries },
  { category: "Fries", name: "Fries Large", price: 79, desc: "Bigger shareable fries.", image: images.fries },
  { category: "Fries", name: "Peri Peri Small", price: 79, desc: "Fries tossed in peri peri spice.", image: images.periFries },
  { category: "Fries", name: "Peri Peri Large", price: 119, desc: "Large peri peri fries.", image: images.periFries },
  { category: "Fries", name: "Loaded Fries", price: 149, desc: "Saucy loaded fries with bold toppings.", image: images.loadedFries },

  { category: "Chicken", name: "Peri Peri Strips (4 pcs)", price: 109, desc: "Crispy strips with peri peri heat.", image: images.periStrips, badge: "Add fries @39" },
  { category: "Chicken", name: "Peri Peri Strips (6 pcs)", price: 149, desc: "More strips for the table.", image: images.periStrips, badge: "Add fries @39" },
  { category: "Chicken", name: "Chicken Popcorn", price: 59, desc: "Crunchy bite-size chicken.", image: images.popcorn, badge: "Add fries @39" },
  { category: "Chicken", name: "Saucy Popcorn", price: 79, desc: "Popcorn chicken in sauce.", image: images.saucyPopcorn, badge: "Add fries @39" },
  { category: "Chicken", name: "Maxi Chicken Popcorn", price: 99, desc: "Bigger popcorn chicken portion.", image: images.popcorn, badge: "Add fries @39" },
  { category: "Chicken", name: "Maxi Saucy Popcorn", price: 129, desc: "Bigger saucy popcorn chicken.", image: images.saucyPopcorn, badge: "Add fries @39" },
  { category: "Chicken", name: "Fried Wings (4 pcs)", price: 149, desc: "Crispy fried wings.", image: images.wings, badge: "Add fries @39" },
  { category: "Chicken", name: "Fried Wings (8 pcs)", price: 249, desc: "A fuller wings box.", image: images.wings, badge: "Add fries @39" },

  { category: "Momo", name: "Pan Fried Momo (5 pcs)", price: 99, desc: "Pan tossed momos with masala finish.", image: images.panFriedMomo },
  { category: "Momo", name: "Steam Chicken Momo", price: 69, desc: "Soft steamed chicken momos.", image: images.steamChickenMomo, badge: "Add fries @39" },
  { category: "Momo", name: "Fried Chicken Momo", price: 79, desc: "Fried chicken momos.", image: images.friedChickenMomo, badge: "Add fries @39" },
  { category: "Momo", name: "Steam Veg Momo", price: 59, desc: "Steamed vegetarian momos.", image: images.steamVegMomo, badge: "Add fries @39" },
  { category: "Momo", name: "Fried Veg Momo", price: 69, desc: "Fried vegetarian momos.", image: images.friedVegMomo, badge: "Add fries @39" },

  { category: "Snacks", name: "Mozzarella Sticks (5 pcs)", price: 69, desc: "Melty cheese sticks.", image: images.mozzarella, badge: "Add fries @39" },
  { category: "Snacks", name: "Mozzarella Sticks (10 pcs)", price: 129, desc: "Double cheese sticks.", image: images.mozzarella, badge: "Add fries @39" },
  { category: "Snacks", name: "Spring Roll (3 pcs)", price: 69, desc: "Crisp rolls with dip.", image: images.springRoll, badge: "Add fries @39" },
  { category: "Snacks", name: "Spring Roll (6 pcs)", price: 129, desc: "Shareable spring rolls.", image: images.springRoll, badge: "Add fries @39" },
  { category: "Snacks", name: "Potato Nuggets Small", price: 59, desc: "Golden potato bites.", image: images.potatoNuggets, badge: "Add fries @39" },
  { category: "Snacks", name: "Potato Nuggets Large", price: 109, desc: "Large potato nuggets.", image: images.potatoNuggets, badge: "Add fries @39" },

  { category: "Drinks", name: "Chai Small", price: 15, desc: "Small hot chai.", image: images.chai },
  { category: "Drinks", name: "Chai Large", price: 25, desc: "Large hot chai.", image: images.chai },
  { category: "Drinks", name: "Hot Coffee Small", price: 30, desc: "Small hot coffee.", image: images.coffee },
  { category: "Drinks", name: "Hot Coffee Large", price: 60, desc: "Large hot coffee.", image: images.coffee },
  { category: "Drinks", name: "Black Coffee Small", price: 25, desc: "Small black coffee.", image: images.coffee },
  { category: "Drinks", name: "Black Coffee Large", price: 50, desc: "Large black coffee.", image: images.coffee }
];

const comboGrid = document.querySelector("#comboGrid");
const menuGrid = document.querySelector("#menuGrid");
const categoryTabs = document.querySelector("#categoryTabs");
const bucket = document.querySelector("#bucket");
const bucketToggle = document.querySelector("#bucketToggle");
const bucketCount = document.querySelector("#bucketCount");
const bucketTotal = document.querySelector("#bucketTotal");
const bucketItems = document.querySelector("#bucketItems");
const clearBucket = document.querySelector("#clearBucket");
const whatsappOrder = document.querySelector("#whatsappOrder");

let activeCategory = "All";
let cart = [];

function money(value) {
  return `₹${value}`;
}

function renderCombos() {
  comboGrid.innerHTML = combos.map((item) => cardTemplate(item, item.featured ? "combo-card featured" : "combo-card")).join("");
}

function renderTabs() {
  const categories = ["All", ...new Set(menu.map((item) => item.category))];
  categoryTabs.innerHTML = categories.map((category) => (
    `<button class="${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">${category}</button>`
  )).join("");
}

function renderMenu() {
  const filtered = activeCategory === "All" ? menu : menu.filter((item) => item.category === activeCategory);
  menuGrid.innerHTML = filtered.map((item) => cardTemplate(item, "menu-card")).join("");
}

function cardTemplate(item, className) {
  return `
    <article class="${className}">
      ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}
      <img src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="${className.includes("combo") ? "combo-body" : "menu-body"}">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="price-row">
          <span class="price">${money(item.price)}</span>
          <button class="add-btn" type="button" data-name="${item.name}" data-price="${item.price}">Add</button>
        </div>
      </div>
    </article>
  `;
}

function addToCart(name, price) {
  const existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  renderCart();
}

function updateQuantity(name, change) {
  const item = cart.find((entry) => entry.name === name);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.name !== name);
  }
  renderCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  bucketCount.textContent = count;
  bucketTotal.textContent = money(total);
  bucket.classList.toggle("has-items", count > 0);

  bucketItems.innerHTML = cart.length
    ? cart.map((item) => `
      <li class="bucket-item">
        <div>
          <strong>${item.name}</strong>
          <span>${money(item.price)} each</span>
        </div>
        <div class="qty">
          <button type="button" data-qty="-1" data-name="${item.name}" aria-label="Remove one ${item.name}">-</button>
          <b>${item.quantity}</b>
          <button type="button" data-qty="1" data-name="${item.name}" aria-label="Add one ${item.name}">+</button>
        </div>
      </li>
    `).join("")
    : `<li class="bucket-item"><strong>Your bucket is empty</strong><span>Add a few favourites from the menu.</span></li>`;

  const lines = cart.map((item) => `${item.quantity} x ${item.name} - ${money(item.price * item.quantity)}`);
  const message = encodeURIComponent(`Hi Streetwok, I want to order:\n${lines.join("\n")}\nTotal: ${money(total)}`);
  whatsappOrder.href = cart.length ? `https://wa.me/${phoneNumber}?text=${message}` : `https://wa.me/${phoneNumber}`;
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest(".add-btn");
  if (addButton) {
    addToCart(addButton.dataset.name, Number(addButton.dataset.price));
    bucket.classList.add("open");
    return;
  }

  const tab = event.target.closest("[data-category]");
  if (tab) {
    activeCategory = tab.dataset.category;
    renderTabs();
    renderMenu();
    return;
  }

  const qty = event.target.closest("[data-qty]");
  if (qty) {
    updateQuantity(qty.dataset.name, Number(qty.dataset.qty));
  }
});

bucketToggle.addEventListener("click", () => {
  bucket.classList.toggle("open");
});

clearBucket.addEventListener("click", () => {
  cart = [];
  renderCart();
});

renderCombos();
renderTabs();
renderMenu();
renderCart();
