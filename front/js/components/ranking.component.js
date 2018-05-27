import axios from "axios";

import { Component } from "../component";

export function Ranking(selector) {
  Component.call(this, selector);
}

Ranking.prototype = Object.create(Component.prototype);

Ranking.prototype.render = function(numbers) {
  const container = this.getDOMElement();
  container.innerHTML = "";

  numbers.forEach(number => {
    const listElement = document.createElement("li");
    listElement.classList.add("list-group-item");
    listElement.innerHTML = `${number.value} (${number.occurrence})`;

    container.appendChild(listElement);
  });
};
