import i18Obj from './translate.js';

/* LOCAL STORAGE */

let langueLocal = 'en';
let themeLocal = 'dark';

function setLocalStorage() {
  localStorage.setItem('lang', langueLocal);
  localStorage.setItem('theme', themeLocal);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  // storage lng
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
  } // storage theme
  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    if (theme == 'light') {
      themeLocalSwitcher();
    }
  }
}
window.addEventListener('load', getLocalStorage)



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
  document.querySelector(`input[value=${lng}]`).checked = true;
  langueLocal = lng;
  console.log(`Язык изменен на ${langueLocal}`)
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


/* THEME SWITCHER */


// Работа кнопки и переключение темы 
const themeSwitcherDark = document.querySelector('.switch-theme-dark')
const themeSwitcherLight = document.querySelector('.switch-theme-light')
const themeSwitcher = document.querySelectorAll('.switch-theme')

function themeLocalSwitcher() {
      lightSwitcher();
      themeSwitcherDark.style.display = (themeSwitcherDark.style.display == 'none') ? 'block' : 'none';
      themeSwitcherLight.style.display = (themeSwitcherLight.style.display == 'none') ? 'block' : 'none'
      themeLocal = (themeLocal == 'dark') ? 'light' : 'dark';
      console.log(`Тема изменена на ${themeLocal}`)
}


themeSwitcher.forEach(element => {
  element.addEventListener('click', (event) => {
    lightSwitcher();
    themeSwitcherDark.style.display = (themeSwitcherDark.style.display == 'none') ? 'block' : 'none';
    themeSwitcherLight.style.display = (themeSwitcherLight.style.display == 'none') ? 'block' : 'none'
    themeLocal = (themeLocal == 'dark') ? 'light' : 'dark';
    console.log(`Тема изменена на ${themeLocal}`)
  });
});


// Функция смена темы

const themeArray = document.querySelectorAll('.portfolio-btn, .section-title, .container-main ');

function lightSwitcher () {
  themeArray.forEach(element => {
    element.classList.toggle('light-theme');
  });
  // фикс h2
  if (themeLocal == 'dark') {
    document.documentElement.style.setProperty('--main-color-h2', '#000')
  } else {
    document.documentElement.style.setProperty('--main-color-h2', '#bdae82');
  }
}
