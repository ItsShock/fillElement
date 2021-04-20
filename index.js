function fillElement(str) {
  const span = document.createElement("span")
  span.innerText = str;
  return span;
};

module.exports = fillElement;
