class Counter {
  constructor(element, start) {
    this.counter = element;
    this.value = start;
    this.increaseBtn = element.querySelector(".increase");
    this.resetBtn = element.querySelector(".reset");
    this.decreaseBtn = element.querySelector(".decrease");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;
    this.increaseBtn.addEventListener("click", this.increase.bind(this));
    this.decreaseBtn.addEventListener("click", this.decrease.bind(this));
    this.resetBtn.addEventListener("click", this.reset.bind(this));
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
}

function getElement(selector) {
  const element = document.querySelector(selector);

  if (element) {
    return element;
  }

  throw new Error(`Please check ${selector} selector. No such element exists`);
}

const counter1 = new Counter(getElement(".first-counter"), 100);
const counter2 = new Counter(getElement(".second-counter"), 200);
