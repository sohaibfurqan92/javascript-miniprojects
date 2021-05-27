import { getElement } from './getElement.js';
import removeActive from './removeActive.js';

// target elements
const userImage = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
// const btn = getElement('.btn');
const btns = [...document.querySelectorAll('.icon')];

function displayUser(userData) {
  userImage.src = userData.image;
  value.textContent = userData.name;
  title.textContent = 'My name is';
  btns[0].classList.add('active');

  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener('click', () => {
      title.textContent = `My ${label} is:`;
      value.textContent = userData[label];
      removeActive();
      btn.classList.add('active');
    });
  });
}

export default displayUser;
