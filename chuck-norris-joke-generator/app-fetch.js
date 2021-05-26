const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const url = 'https://api.chucknorris.io/jokes/random';
const img = document.querySelector('.container img');

btn.addEventListener('click', function () {
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data))
    .catch((error) => console.log(error));
});

function displayData({ value: joke }) {
  img.classList.add('shake-img');
  content.innerHTML = joke;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, Math.random() * 2000);
}
