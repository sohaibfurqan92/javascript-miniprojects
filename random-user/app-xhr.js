// this project uses the random person api at https://randomuser.me
//import fetchUser from './utils/fetchUser.js';
import fetchUser from './utils/fetchUser-promise.js';
import { getElement } from './utils/getElement.js';
import displayUser from './utils/displayUser.js';

const url = 'https://randomuser.me/api/';

const btn = getElement('.btn');

function showUser() {
  //fetch random user
  // display user
  let user = '';
  fetchUser(url).then((data) => {
    user = data;
    const { first, last } = user.name;
    const { large: image } = user.picture;
    const { email, location, cell: phone } = user;
    const { age } = user.dob;
    const { password } = user.login;
    const address = `${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`;
    const name = `${first} ${last}`;

    const userData = { name, image, email, address, phone, age, password };

    displayUser(userData);
  });
}

btn.addEventListener('click', showUser);
document.addEventListener('DOMContentLoaded', showUser);
