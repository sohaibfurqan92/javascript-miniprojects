const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// select elements
const btn = document.getElementById("btn");
const color = document.getElementsByClassName("color")[0];

btn.addEventListener("click", flipColor);

function flipColor() {
  //get a random number for array index
  const index = Math.floor(Math.random() * colors.length);

  const currentColor = colors[index];

  color.textContent = currentColor;

  document.body.style.backgroundColor = currentColor;
}
