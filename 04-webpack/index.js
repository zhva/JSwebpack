function component() {
  const element = document.createElement("div");

  // Uses the Lodash library to join the array
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
