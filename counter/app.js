//target html elements

const value = document.getElementById("value");
const decreaseBtn = document.getElementsByClassName("decrease")[0];

const resetBtn = document.getElementsByClassName("reset")[0];
const increaseBtn = document.getElementsByClassName("increase")[0];

let currentValue = 0;
value.textContent = currentValue;

function decreaseValue() {
  currentValue -= 1;
  displayValue();
}

function increaseValue() {
  currentValue++;
  displayValue();
}

function resetValue() {
  currentValue = 0;
  displayValue();
}

function displayValue() {
  if (currentValue > 0) {
    value.style.color = "green";
  } else if (currentValue < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "#000";
  }

  value.textContent = currentValue;
}

decreaseBtn.addEventListener("click", decreaseValue);
increaseBtn.addEventListener("click", increaseValue);
resetBtn.addEventListener("click", resetValue);
