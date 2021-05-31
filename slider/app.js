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

// switch slides

const startSlider = (type) => {
  const active = document.querySelector('.active');
  const last = document.querySelector('.last');
  let next = active.nextElementSibling || container.firstElementChild;

  active.classList.remove(['active']);
  last.classList.remove(['last']);
  next.classList.remove(['next']);

  if (type === 'prev') {
    active.classList.add('next');
    last.classList.add('active');
    next = last.previousElementSibling;

    if (!next) {
      next = container.lastElementChild;
    }

    next.classList.remove(['next']);
    next.classList.add('last');
    return;
  }

  active.classList.add('last');
  next.classList.add('active');
  last.classList.add('next');
};

nextBtn.addEventListener('click', function () {
  startSlider();
});

prevBtn.addEventListener('click', function () {
  startSlider('prev');
});
