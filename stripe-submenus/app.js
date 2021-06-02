import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebarLinks = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', function () {
  sidebarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', function () {
  sidebarWrapper.classList.remove('show');
});

// set Sidebar data

sidebarLinks.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article>
  <h4>${page}</h4>
  <div class="sidebar-sublinks">
  ${links
    .map((link) => {
      return `<a href=${link.url}>
    <i class="${link.icon}"></i> ${link.label}
    </a>`;
    })
    .join('')}
  </div>
  </article>`;
  })
  .join('');

linkBtns.forEach((btn) => {
  btn.addEventListener('mouseover', function (e) {
    const text = e.currentTarget.textContent.toLowerCase();
    const coordinates = e.currentTarget.getBoundingClientRect();
    const bottom = coordinates.bottom - 3;
    const center = (coordinates.left + coordinates.right) / 2;

    const tempPage = sublinks.find((link) => link.page === text);
    if (tempPage) {
      const { page, links } = tempPage;

      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      submenu.classList.add('show');

      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }

      if (links.length > 3) {
        columns = 'col-4';
      }

      submenu.innerHTML = `
      <section>
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map((link) => {
          return `<a href="${link.url}">
        <i class="${link.icon}"></i> ${link.label}
        </a>`;
        })
        .join('')}
      </div>
      </section>
      `;
    }
  });
});

hero.addEventListener('mouseover', () => {
  submenu.classList.remove('show');
});

nav.addEventListener('mouseover', (e) => {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});
