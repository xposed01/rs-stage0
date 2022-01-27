import i18Obj from './translate.js';

/* TRANSLATE */

function getTranslate(lng) {
  const data = document.querySelectorAll('[data-i18n]');
  data.forEach(element => {
      if (element.placeholder) {
        element.placeholder = i18Obj[lng][element.dataset.i18n];
        element.textContent = '';
      } else {
        element.textContent = i18Obj[lng][element.dataset.i18n];
      }
  });
}

const radioLngRU = document.querySelector('input[value="ru"]');
const radioLngEN = document.querySelector('input[value="en"]');
radioLngRU.addEventListener('click', () => getTranslate('ru'));
radioLngEN.addEventListener('click', () => getTranslate('en'));




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


