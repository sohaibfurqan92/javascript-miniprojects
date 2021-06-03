const displayButtons = (container, pages, activeIndex) => {
  container.innerHTML = '';

  let btns = pages.map((_, index) => {
    return `<button class="page-btn ${
      activeIndex === index ? 'active-btn' : ''
    }" data-index=${index}>
    ${index + 1}
    </button>`;
  });

  btns.push('<button class="next-btn">Next</button>');
  btns.unshift('<button class="prev-btn">Prev</button>');

  container.innerHTML = btns.join('');
};

export default displayButtons;
