const url = 'https://type.fit/api/quotes';

const generatedText = document.querySelector('.generated-text');
const image = document.querySelector('.main-image');
const body = document.querySelector('body');

// random generator
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// bacground animation
function backgroundAnimation() {
  body.style.backgroundImage = `linear-gradient(${getRandom(0, 555)}deg, #add1e9 0%, #b3b5df 100%)`;
}

// API show
function showData(data) {
  generatedText.innerText = data[getRandom(0, data.length-1)].text;
  backgroundAnimation();
}

// API async
async function getData() {
  const result = await fetch(url);
  const data = await result.json();
  showData(data);
}

addEventListener("load", getData());
