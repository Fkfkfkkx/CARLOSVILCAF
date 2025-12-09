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

         document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
         });

         this.classList.add('active');

         target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
      navLinks.classList.remove('active');
   });
});


function updateActiveNavItem() {
   const sections = document.querySelectorAll('section[id]');
   const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

   let current = '';
   const scrollPosition = window.scrollY + 100;

   sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
         current = section.getAttribute('id');
      }
   });

   navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
         link.classList.add('active');
      }
   });
}


function createDiagonalGrid() {
   const grid = document.querySelector('.diagonal-grid');
   if (!grid) return;

   const blocks = [
      { width: 80, bottom: -400, left: -100, delay: 0, duration: 22 },
      { width: 60, bottom: -300, left: 100, delay: 2, duration: 20 },
      { width: 100, bottom: -370, left: 350, delay: 1, duration: 24 },
      { width: 70, bottom: -230, left: 200, delay: 1.5, duration: 21 },
      { width: 90, bottom: -170, left: 500, delay: 0.5, duration: 23 },
      { width: 50, bottom: -270, left: 400, delay: 3, duration: 25 }
   ];

   blocks.forEach(block => {
      const element = document.createElement('div');
      element.className = 'soft-block';
      element.style.width = `${block.width}px`;
      element.style.bottom = `${block.bottom}px`;
      element.style.left = `${block.left}px`;
      element.style.animationDelay = `${block.delay}s`;
      element.style.animationDuration = `${block.duration}s`;
      grid.appendChild(element);
   });
}


function createStaticDecoration() {
   const decoration = document.querySelector('.static-decoration');
   if (!decoration) return;

   const staticBlocks = [
      { size: 85, top: '20px', right: '30px', outline: true },
      { size: 120, top: '80px', right: '120px', outline: false },
      { size: 100, top: '140px', right: '50px', outline: true },
      { size: 40, top: '50px', right: '180px', outline: true },
      { size: 95, top: '200px', right: '150px', outline: false },
      { size: 60, top: '100px', right: '280px', outline: true },
      { size: 75, top: '180px', right: '220px', outline: true },
      { size: 50, top: '300px', right: '180px', outline: true },
      { size: 90, top: '60px', right: '320px', outline: false }
   ];

   staticBlocks.forEach(block => {
      const element = document.createElement('div');
      element.className = block.outline ? 'static-block-outline' : 'static-block';
      element.style.width = `${block.size}px`;
      element.style.height = `${block.size}px`;
      element.style.top = block.top;
      element.style.right = block.right;
      decoration.appendChild(element);
   });
}


function createBottomRightDecoration() {
   const decoration = document.querySelector('.bottom-right-decoration');
   if (!decoration) return;

   const redBlocks = [
      { size: 65, bottom: '20px', right: '40px', outline: false },
      { size: 45, bottom: '60px', right: '120px', outline: false },
      { size: 85, bottom: '120px', right: '60px', outline: false },
      { size: 35, bottom: '100px', right: '150px', outline: false },
      { size: 55, bottom: '40px', right: '200px', outline: true },
      { size: 70, bottom: '160px', right: '140px', outline: true }
   ];

   redBlocks.forEach(block => {
      const element = document.createElement('div');
      element.className = block.outline ? 'red-block-outline' : 'red-block';
      element.style.width = `${block.size}px`;
      element.style.height = `${block.size}px`;
      element.style.bottom = block.bottom;
      element.style.right = block.right;
      decoration.appendChild(element);
   });
}


/*  -------------------------
    PRODUCTOS ORGÁNICOS ECO MARKET
    (Solo cambié títulos e ingredientes)
    ------------------------- */

const ingredientsData = {
   'truffle-risotto': {
      title: 'Arroz Integral Orgánico con Trufa',
      ingredients: [
         { name: 'Arroz Integral Orgánico', allergen: false },
         { name: 'Trufa Negra Natural', allergen: false },
         { name: 'Queso Parmesano Orgánico', allergen: true },
         { name: 'Caldo Vegetal Orgánico', allergen: false },
         { name: 'Aceite de Oliva Extra Virgen', allergen: false },
         { name: 'Mantequilla Orgánica', allergen: true },
         { name: 'Hierbas Orgánicas', allergen: false },
         { name: 'Cebolla Blanca Orgánica', allergen: false }
      ]
   },

   'grilled-salmon': {
      title: 'Salmón Orgánico con Vegetales',
      ingredients: [
         { name: 'Salmón de Cultivo Responsable', allergen: true },
         { name: 'Limón Orgánico', allergen: false },
         { name: 'Aceite de Oliva Orgánico', allergen: false },
         { name: 'Vegetales Orgánicos', allergen: false },
         { name: 'Eneldo Orgánico', allergen: false },
         { name: 'Sal Marina Natural', allergen: false },
         { name: 'Pimienta Negra Orgánica', allergen: false }
      ]
   },

   'beef-wellington': {
      title: 'Pan Integral Relleno de Vegetales Orgánicos',
      ingredients: [
         { name: 'Pan Integral Orgánico', allergen: true },
         { name: 'Champiñones Orgánicos', allergen: false },
         { name: 'Espinaca Orgánica', allergen: false },
         { name: 'Zanahoria Orgánica', allergen: false },
         { name: 'Ajo Orgánico', allergen: false },
         { name: 'Cebolla Morada Orgánica', allergen: false }
      ]
   },

   'lobster-thermidor': {
      title: 'Ensalada Orgánica Premium',
      ingredients: [
         { name: 'Mix de Hojas Verdes Orgánicas', allergen: false },
         { name: 'Tomates Cherry Orgánicos', allergen: false },
         { name: 'Queso Vegano Orgánico', allergen: false },
         { name: 'Vinagre de Manzana Orgánico', allergen: false },
         { name: 'Pepino Orgánico', allergen: false },
         { name: 'Zanahoria Rallada Orgánica', allergen: false }
      ]
   },

   'duck-confit': {
      title: 'Pollo de Granja Orgánica al Horno',
      ingredients: [
         { name: 'Pollo Orgánico', allergen: false },
         { name: 'Papas Orgánicas', allergen: false },
         { name: 'Romero Orgánico', allergen: false },
         { name: 'Ajo Orgánico', allergen: false },
         { name: 'Aceite de Oliva Orgánico', allergen: false }
      ]
   },

   'chocolate-souffle': {
      title: 'Brownie Orgánico de Cacao Puro',
      ingredients: [
         { name: 'Cacao Orgánico 70%', allergen: false },
         { name: 'Harina Integral Orgánica', allergen: true },
         { name: 'Azúcar de Coco Orgánica', allergen: false },
         { name: 'Huevos de Gallina de Granja', allergen: true },
         { name: 'Mantequilla Orgánica', allergen: true },
         { name: 'Frutas Orgánicas', allergen: false }
      ]
   }
};

/* Modal */
function showIngredients(dishId) {
   const modal = document.getElementById('ingredientsModal');
   const title = document.getElementById('modalTitle');
   const list = document.getElementById('ingredientsList');

   const dish = ingredientsData[dishId];
   if (dish) {
      title.textContent = dish.title;
      list.innerHTML = '';

      dish.ingredients.forEach(ingredient => {
         const li = document.createElement('li');
         li.innerHTML = `
            <span>${ingredient.name}</span>
            ${ingredient.allergen ? '<span class="allergen">Alérgeno</span>' : ''}
         `;
         list.appendChild(li);
      });

      modal.style.display = 'block';
   }
}


function closeModal() {
   document.getElementById('ingredientsModal').style.display = 'none';
}


window.addEventListener('click', (e) => {
   const modal = document.getElementById('ingredientsModal');
   if (e.target === modal) {
      closeModal();
   }
});


function handleReservation(e) {
   e.preventDefault();

   const formData = new FormData(e.target);
   const reservation = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      time: formData.get('time'),
      guests: formData.get('guests'),
      special: formData.get('special')
   };

   alert(`¡Gracias, ${reservation.name}! Tu reserva para ${reservation.guests} productos el ${reservation.date} a las ${reservation.time} ha sido registrada. Te enviaremos un correo a ${reservation.email}.`);

   e.target.reset();
}


window.addEventListener('scroll', () => {
   const nav = document.querySelector('nav');
   if (window.scrollY > 100) {
      nav.style.background = 'rgba(255, 255, 255, 0.98)';
      nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
   } else {
      nav.style.background = 'rgba(255, 255, 255, 0.95)';
      nav.style.boxShadow = 'none';
   }

   updateActiveNavItem();
});


document.addEventListener('DOMContentLoaded', () => {

   const dateInput = document.getElementById('date');
   if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
   }

   createDiagonalGrid();
   createStaticDecoration();
   createBottomRightDecoration();

   const homeLink = document.querySelector('.nav-links a[href="#home"]');
   if (homeLink) {
      homeLink.classList.add('active');
   }
});
