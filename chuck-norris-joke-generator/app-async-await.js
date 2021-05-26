const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const url = 'https://api.chucknorris.io/jokes/random';
const img = document.querySelector('.container img');

btn.addEventListener('click', function () {
  getChuckNorrisJoke(url);
});

async function getChuckNorrisJoke(url) {
  const res = await fetch(url);
  const data = await res.json();
  displayData(data);
}

function displayData({ value: joke }) {
  img.classList.add('shake-img');
  content.innerHTML = joke;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, Math.random() * 2000);
}
