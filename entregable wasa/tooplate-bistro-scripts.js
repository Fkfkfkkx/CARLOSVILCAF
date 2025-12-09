const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
   navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
         window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
         });
      }
   });
});

// === PRODUCTOS DEL ECO MARKET ===
const productsData = {
   product1: {
      name: "Manzana Orgánica",
      price: "S/ 4.50 por unidad",
      ingredients: ["Manzana ecológica 100%", "Cultivo sostenible", "Libre de pesticidas"]
   },
   product2: {
      name: "Miel Artesanal",
      price: "S/ 28.00 por frasco",
      ingredients: ["Miel pura", "Floraciones altas en néctar", "Producción local"]
   },
   product3: {
      name: "Aceite de Oliva Premium",
      price: "S/ 35.00 botella",
      ingredients: ["Aceituna orgánica", "Extra virgen", "Prensado en frío"]
   },
   product4: {
      name: "Quinua Real",
      price: "S/ 18.00 por kilo",
      ingredients: ["Quinua andina", "Libre de químicos", "Alta proteína natural"]
   },
   product5: {
      name: "Café Orgánico",
      price: "S/ 25.00 bolsa",
      ingredients: ["Grano 100% arábica", "Cultivo en sombra", "Tostado artesanal"]
   }
};

// === MODAL ===
const modal = document.getElementById("product-modal");
const modalTitle = document.getElementById("modal-title");
const modalIngredients = document.getElementById("modal-ingredients");

function openModal(productKey) {
   const product = productsData[productKey];
   modalTitle.textContent = product.name;

   modalIngredients.innerHTML = "";
   product.ingredients.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      modalIngredients.appendChild(li);
   });

   modal.style.display = "block";
}

document.querySelector(".close-btn").addEventListener("click", () => {
   modal.style.display = "none";
});

// === Reservas convertidas a pedidos ===
document.getElementById("reservation-form").addEventListener("submit", function(e) {
   e.preventDefault();
   alert("¡Tu pedido ecológico ha sido registrado! Gracias por apoyar un consumo sostenible.");
   this.reset();
});

// Animación decorativa
document.querySelectorAll('.decorative-block').forEach(block => {
   block.addEventListener('mouseenter', () => {
      block.style.transform = "scale(1.05)";
   });
   block.addEventListener('mouseleave', () => {
      block.style.transform = "scale(1)";
   });
});
