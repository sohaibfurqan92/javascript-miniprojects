import getElement from './getElement.js';
import presentDrinks from './presentDrinks.js';

const searchBox = getElement('.search-form input');
searchBox.addEventListener('keyup', function (e) {
  const value = e.target.value;
  if (value !== null) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
    presentDrinks(url);
  }
});
