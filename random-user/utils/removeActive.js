const btns = [...document.querySelectorAll('.icon')];

function removeActive() {
  btns.forEach((btn) => btn.classList.remove('active'));
}

export default removeActive;
