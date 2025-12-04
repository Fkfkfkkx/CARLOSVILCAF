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

   const blocks = [{
         width: 80,
         bottom: -400,
         left: -100,
         delay: 0,
         duration: 22
      },
      {
         width: 60,
         bottom: -300,
         left: 100,
         delay: 2,
         duration: 20
      },
      {
         width: 100,
         bottom: -370,
         left: 350,
         delay: 1,
         duration: 24
      },
      {
         width: 70,
         bottom: -230,
         left: 200,
         delay: 1.5,
         duration: 21
      },
      {
         width: 90,
         bottom: -170,
         left: 500,
         delay: 0.5,
         duration: 23
      },
      {
         width: 50,
         bottom: -270,
         left: 400,
         delay: 3,
         duration: 25
      }
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

   const staticBlocks = [{
         size: 85,
         top: '20px',
         right: '30px',
         outline: true
      },
      {
         size: 120,
         top: '80px',
         right: '120px',
         outline: false
      },
      {
         size: 100,
         top: '140px',
         right: '50px',
         outline: true
      },
      {
         size: 40,
         top: '50px',
         right: '180px',
         outline: true
      },
      {
         size: 95,
         top: '200px',
         right: '150px',
         outline: false
      },
      {
         size: 60,
         top: '100px',
         right: '280px',
         outline: true
      },
      {
         size: 75,
         top: '180px',
         right: '220px',
         outline: true
      },
      {
         size: 50,
         top: '300px',
         right: '180px',
         outline: true
      },
      {
         size: 90,
         top: '60px',
         right: '320px',
         outline: false
      }
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

   const redBlocks = [{
         size: 65,
         bottom: '20px',
         right: '40px',
         outline: false
      },
      {
         size: 45,
         bottom: '60px',
         right: '120px',
         outline: false
      },
      {
         size: 85,
         bottom: '120px',
         right: '60px',
         outline: false
      },
      {
         size: 35,
         bottom: '100px',
         right: '150px',
         outline: false
      },
      {
         size: 55,
         bottom: '40px',
         right: '200px',
         outline: true
      },
      {
         size: 70,
         bottom: '160px',
         right: '140px',
         outline: true
      }
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


const ingredientsData = {
   'truffle-risotto': {
      title: 'Risotto de Trufa',
      ingredients: [{
            name: 'Arroz Arborio',
            allergen: false
         },
         {
            name: 'Trufa Negra',
            allergen: false
         },
         {
            name: 'Queso Parmesano',
            allergen: true
         },
         {
            name: 'Caldo de Vegetales',
            allergen: false
         },
         {
            name: 'Vino Blanco',
            allergen: false
         },
         {
            name: 'Mantequilla',
            allergen: true
         },
         {
            name: 'Hierbas Frescas',
            allergen: false
         },
         {
            name: 'Chalotes',
            allergen: false
         }
      ]
   },
   'grilled-salmon': {
      title: 'Salmón a la Parrilla',
      ingredients: [{
            name: 'Salmón del Atlántico',
            allergen: true
         },
         {
            name: 'Limón',
            allergen: false
         },
         {
            name: 'Mantequilla',
            allergen: true
         },
         {
            name: 'Vegetales de Estación',
            allergen: false
         },
         {
            name: 'Aceite de Oliva',
            allergen: false
         },
         {
            name: 'Eneldo Fresco',
            allergen: false
         },
         {
            name: 'Sal Marina',
            allergen: false
         },
         {
            name: 'Pimienta Negra',
            allergen: false
         }
      ]
   },
   'beef-wellington': {
      title: 'Beef Wellington',
      ingredients: [{
            name: 'Lomo de Res',
            allergen: false
         },
         {
            name: 'Hojaldre',
            allergen: true
         },
         {
            name: 'Duxelles de Champiñones',
            allergen: false
         },
         {
            name: 'Prosciutto',
            allergen: false
         },
         {
            name: 'Huevo Batido',
            allergen: true
         },
         {
            name: 'Tomillo Fresco',
            allergen: false
         },
         {
            name: 'Mostaza Dijon',
            allergen: false
         },
         {
            name: 'Jugo de Vino Tinto',
            allergen: false
         }
      ]
   },
   'lobster-thermidor': {
      title: 'Langosta Thermidor',
      ingredients: [{
            name: 'Langosta Fresca',
            allergen: true
         },
         {
            name: 'Coñac',
            allergen: false
         },
         {
            name: 'Crema de Leche',
            allergen: true
         },
         {
            name: 'Queso Gruyere',
            allergen: true
         },
         {
            name: 'Mantequilla',
            allergen: true
         },
         {
            name: 'Yemas de Huevo',
            allergen: true
         },
         {
            name: 'Estragón Fresco',
            allergen: false
         },
         {
            name: 'Pimienta Blanca',
            allergen: false
         }
      ]
   },
   'duck-confit': {
      title: 'Confit de Pato',
      ingredients: [{
            name: 'Pierna de Pato',
            allergen: false
         },
         {
            name: 'Grasa de Pato',
            allergen: false
         },
         {
            name: 'Papas al Ajo',
            allergen: false
         },
         {
            name: 'Cerezas Frescas',
            allergen: false
         },
         {
            name: 'Vinagre de Vino Tinto',
            allergen: false
         },
         {
            name: 'Tomillo Fresco',
            allergen: false
         },
         {
            name: 'Hojas de Laurel',
            allergen: false
         },
         {
            name: 'Sal Gruesa',
            allergen: false
         }
      ]
   },
   'chocolate-souffle': {
      title: 'Soufflé de Chocolate',
      ingredients: [{
            name: 'Chocolate Oscuro',
            allergen: false
         },
         {
            name: 'Huevos',
            allergen: true
         },
         {
            name: 'Azúcar',
            allergen: false
         },
         {
            name: 'Mantequilla',
            allergen: true
         },
         {
            name: 'Helado de Vainilla',
            allergen: true
         },
         {
            name: 'Frutas del Bosque',
            allergen: false
         },
         {
            name: 'Crema de Leche',
            allergen: true
         },
         {
            name: 'Extracto de Vainilla',
            allergen: false
         }
      ]
   }
};


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

   alert(`¡Gracias, ${reservation.name}! Tu reserva para ${reservation.guests} personas el ${reservation.date} a las ${reservation.time} ha sido confirmada. Te enviaremos un correo de confirmación a ${reservation.email}.`);

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
