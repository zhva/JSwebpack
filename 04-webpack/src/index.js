import join from "lodash/join";
import "./css/style.scss";
import Jpg from "./img/ba927ff34cd961ce2c184d47e8ead9f6.jpg"

function component() {
  const element = document.createElement("div");

  // Uses the Lodash library to join the array
  element.innerHTML = join(["Hello!!!", "webpack"], " ");

  return element;
}
function image() {
  const image = new Image();
  image.src = Jpg;

  return image;
}

document.body.appendChild(component());
document.body.appendChild(image());
