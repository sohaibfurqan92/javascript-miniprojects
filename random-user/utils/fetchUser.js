import displayUser from './displayUser.js';

function fetchUser(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const user = JSON.parse(xhr.responseText).results[0];

      const { first, last } = user.name;
      const { large: image } = user.picture;
      const { email, location, cell: phone } = user;
      const { age } = user.dob;
      const { password } = user.login;
      const address = `${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`;
      const name = `${first} ${last}`;

      const userData = { name, image, email, address, phone, age, password };

      displayUser(userData);
    } else {
      return;
    }
  };

  xhr.send();
}

export default fetchUser;
