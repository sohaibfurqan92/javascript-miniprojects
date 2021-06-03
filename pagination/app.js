import fetchFollowers from './fetchFollowers.js';
import displayFollowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

const heading = document.querySelector('h1');
const btnContainer = document.querySelector('.btn-container');
let index = 0;
let pages = [];
window.addEventListener('load', init);

btnContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('page-btn')) {
    index = e.target.dataset.index;
    genUI();
  }

  if (e.target.classList.contains('next-btn')) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
    genUI();
  }

  if (e.target.classList.contains('prev-btn')) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
    genUI();
  }
});

async function init() {
  const followers = await fetchFollowers();
  heading.textContent = 'Pagination';
  pages = paginate(followers);
  genUI();
}

function genUI() {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
}
