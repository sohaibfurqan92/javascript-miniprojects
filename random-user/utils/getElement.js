export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`Please check ${selection} selector. No such element exists`);
};
