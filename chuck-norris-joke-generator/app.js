const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const url = 'https://api.chucknorris.io/jokes/random';
const img = document.querySelector('.container img');

btn.addEventListener('click', function () {
  getChuckNorrisJoke(url);
});

function getChuckNorrisJoke(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      img.classList.add('shake-img');
      content.innerHTML = JSON.parse(xhr.responseText).value;

      setTimeout(() => {
        img.classList.remove('shake-img');
      }, Math.random() * 2000);
    }
  };

  xhr.send();
}
