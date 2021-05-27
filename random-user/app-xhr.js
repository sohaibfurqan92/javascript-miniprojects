// this project uses the random person api at https://randomuser.me
import fetchUser from './utils/fetchUser.js';
import { getElement } from './utils/getElement.js';
const url = 'https://randomuser.me/api/';

const btn = getElement('.btn');

function showUser() {
  //fetch random user
  // display user
  fetchUser(url);
}

btn.addEventListener('click', showUser);
document.addEventListener('DOMContentLoaded', showUser);
