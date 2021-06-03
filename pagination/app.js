import fetchFollowers from './fetchFollowers.js';
import displayFollowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

const heading = document.querySelector('h1');
const btnContainer = document.querySelector('.btn-container');
let pages = [];
window.addEventListener('load', init);

async function init() {
  const index = 0;
  const followers = await fetchFollowers();
  heading.textContent = 'Pagination';
  pages = paginate(followers);
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
}
