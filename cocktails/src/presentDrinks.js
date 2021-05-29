import fetchDrinks from './fetchDrinks.js';
import getElement from './getElement.js';
import displayDrinks from './displayDrinks.js';

const defaultURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const showDrinks = async (url = defaultURL) => {
  //target elements
  const title = getElement('.title');
  const section = getElement('.section-center');

  // fetch drinks

  const data = await fetchDrinks(url);
  const { drinks } = data;

  //display drinks

  displayDrinks(section, title, drinks);
};

export default showDrinks;
