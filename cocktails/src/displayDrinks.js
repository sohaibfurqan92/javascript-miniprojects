import setDrink from './setDrink.js';

const displayDrinks = async (section, title, drinks) => {
  if (!drinks) {
    section.innerHTML = '';
    title.textContent = 'Your requested drink was not found! Please try again';
    return;
  }

  section.innerHTML = '';
  title.textContent = '';

  drinks.forEach((drink) => {
    section.innerHTML += `<a href="drink.html">
          <article class="cocktail" data-id="${drink.idDrink}">
            <img src="${drink.strDrinkThumb}" alt="cocktail" />
            <h3>${drink.strDrink}</h3>
          </article>
        </a>`;
  });

  if (section) {
    setDrink(section);
  }
};

export default displayDrinks;
