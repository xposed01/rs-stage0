import i18Obj from './translate.js';

/* PORTFOLIO IMG PRELOAD*/

const seasonsPreload = ['winter', 'spring', 'summer', 'autumn'];

(function preloadImages () {
  seasonsPreload.forEach(function (element) {
      for (let i = 1; i <= 6; i++) {
        const img = new Image();
        img.src = `./assets/img/${element}/${i}.jpg`;
        /* console.log(img); */
      }
    });
  }());


/* ACTIVE BUTTON */

const buttonsActive = document.querySelectorAll('.portfolio-btn');
const buttonsActiveDelegate = document.querySelector('.portfolio-btns');

buttonsActiveDelegate.addEventListener('click', (event) => {
  if (event.target.closest('.portfolio-btn')) {
    buttonsActive.forEach(element => {
    element.classList.remove('button-active')
    });
    event.target.classList.add('button-active');
  }
})


/* PORTFOLIO IMGs SWITCHER */

const portfolioBtns = document.querySelector('.portfolio-btns');

  portfolioBtns.addEventListener('click', (event) => {
   const portfolioImages = document.querySelectorAll('.portfolio-img');
   // Делегирование кнопок
    if (event.target.closest('.portfolio-btn')) {
      let dataSeason = event.target.dataset.season;
   // Замена всех фото по выбору из кнопки
      portfolioImages.forEach((img, index) => img.src = `./assets/img/${dataSeason}/${index + 1}.jpg`);
    }
  });



/* TRANSLATE */

function getTranslate(lng) {
  const getLngData = document.querySelectorAll('[data-i18n]');
  getLngData.forEach(element => {
      if (element.placeholder) {
        element.placeholder = i18Obj[lng][element.dataset.i18n];
        element.textContent = '';
      } else {
        element.textContent = i18Obj[lng][element.dataset.i18n];
      }
  });
}

const radioLangueRu = document.querySelector('input[value="ru"]');
const radioLangueEn = document.querySelector('input[value="en"]');
radioLangueRu.addEventListener('click', () => getTranslate('ru'));
radioLangueEn.addEventListener('click', () => getTranslate('en'));




/* MENU-ANIMATION */

(function () {
  const burgerButton = document.querySelector('.menu-burger');
  const burgerMenuOpen = document.querySelector('.navigation');
  const bodyBlackout = document.querySelector('.blackout');
  const burgerMenuNavClose = document.querySelector('.navigation-list') 
  // blackout burger on/off
  burgerButton.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  burgerButton.classList.toggle('_active');
  burgerMenuOpen.classList.toggle('navigation-active');
  bodyBlackout.classList.toggle('blackout-active');
  });
  // blackout ouside click off
  bodyBlackout.addEventListener('click', () => {
  document.body.classList.remove('_lock');
  burgerButton.classList.toggle('_active');
  burgerMenuOpen.classList.remove('navigation-active');
  bodyBlackout.classList.remove('blackout-active');
  });
  // blackout menu click off
  burgerMenuNavClose.addEventListener('click', () => {
  document.body.classList.remove('_lock');
  burgerButton.classList.toggle('_active');
  burgerMenuOpen.classList.remove('navigation-active');
  bodyBlackout.classList.remove('blackout-active');
  });
}());


