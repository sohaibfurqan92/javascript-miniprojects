// import fetchSingleDrink from '../singleDrink.js';

const setDrink = (section) => {
  section.addEventListener('click', function (e) {
    const item = e.target.parentElement;
    if (item.classList.contains('cocktail')) {
      const id = item.getAttribute('data-id');
      localStorage.setItem('drinkID', id);
    }
  });
};

export default setDrink;
