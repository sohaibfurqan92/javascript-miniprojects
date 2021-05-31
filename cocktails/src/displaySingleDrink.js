import { hideLoading } from './toggleLoading.js';
import getElement from './getElement.js';

const displayDrink = (data) => {
  hideLoading();
  const drink = data.drinks[0];

  //destructure required data
  const {
    strDrinkThumb: image,
    strDrink: drinkName,
    strInstructions: instructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = drink;

  const list = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  //target DOM elements

  const img = getElement('.drink-img');
  const name = getElement('.drink-name');
  const desc = getElement('.drink-desc');
  const ingredients = getElement('.drink-ingredients');

  // insert data dynamically
  img.src = image;
  name.textContent = drinkName;
  desc.textContent = instructions;
  ingredients.innerHTML = list
    .map((ingredient) => {
      if (!ingredient) return;
      return `<li>
    <i class="fas fa-check-square"></i> ${ingredient}
    </li>`;
    })
    .join('');
};

export default displayDrink;
