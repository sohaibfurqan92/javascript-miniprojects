import people from './data.js';

// target DOM Elements
const container = document.querySelector('.slide-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

container.innerHTML = '';

people.forEach((person, slideIndex) => {
  const { img, name, job, text } = person;
  let position = 'next';
  if (slideIndex === 0) {
    position = 'active';
  }
  if (slideIndex === people.length - 1) {
    position = 'last';
  }
  container.innerHTML += `<article class="slide ${position}">
          <img
            src="${img}"
            alt="${name}"
            class="img"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
            ${text}
          </p>
          <div class="quote-icon">
            <i class="fas fa-quote-right"></i>
          </div>
        </article>`;
});
