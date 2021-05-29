import getElement from './getElement.js';

const setDrink = (section) => {
  section.addEventListener('click', getDrink);
};

const getDrink = async (e) => {
  const item = e.target.parentElement;
  const id = item.getAttribute('data-id');
  console.log(id);
  const drinkURL = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  console.log(drinkURL);

  const response = await fetch(drinkURL);
  const drinkData = await response.json();
  console.log(drinkData);
};

export default setDrink;
