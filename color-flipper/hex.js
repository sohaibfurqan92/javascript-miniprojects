const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// select elements
const btn = document.getElementById("btn");
const color = document.getElementsByClassName("color")[0];

btn.addEventListener("click", flipColor);

// get random hex code
function getHexCode() {
  let hexcode = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hex.length);
    hexcode += hex[index];
  }

  return hexcode;
}

function flipColor() {
  const hexCode = getHexCode();
  color.textContent = hexCode;
  document.body.style.backgroundColor = hexCode;
}
