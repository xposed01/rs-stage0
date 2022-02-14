const url = 'https://type.fit/api/quotes';

let generatedText = document.querySelector('.generated-text');


// random generator
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// API show
function showData(data) {
  generatedText.innerText = data[getRandom(0, data.length-1)].text;
}

// API async
async function getData() {
  const result = await fetch(url);
  const data = await result.json();
  showData(data);
}

addEventListener("load", getData());
