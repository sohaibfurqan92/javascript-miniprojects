const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const url = 'https://api.chucknorris.io/jokes/random';
const img = document.querySelector('.container img');

btn.addEventListener('click', function () {
  getChuckNorrisJoke(url)
    .then((data) => displayData(data))
    .catch((err) => console.log(err));
});

function getChuckNorrisJoke(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        return;
      }
    };

    xhr.send();
  });
}

function displayData(data) {
  img.classList.add('shake-img');
  content.innerHTML = JSON.parse(data).value;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, Math.random() * 2000);
}
