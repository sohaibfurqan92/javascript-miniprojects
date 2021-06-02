import fetchFollowers from './fetchFollowers.js';
import displayFollowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

const heading = document.querySelector('h1');
window.addEventListener('load', init);

async function init() {
  const followers = await fetchFollowers();
  if (followers) {
    heading.textContent = 'pagination';
  }
  displayFollowers(followers);
}
