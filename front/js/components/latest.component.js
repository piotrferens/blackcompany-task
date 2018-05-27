import axios from "axios";
import { timer } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { Component } from "../component";
import { fetchRandomNumbers } from "../actions";

export function Latest(selector, store) {
  Component.call(this, selector);
  this.store = store;
  this.delayTime = 10000;
}

Latest.prototype = Object.create(Component.prototype);

Latest.prototype.init = function() {
  timer(0, this.delayTime)
    .pipe(
      switchMap(() =>
        axios
          .get("http://localhost:3000/random-numbers")
          .then(response => response.data.data)
          .catch(console.error)
      )
    )
    .subscribe(data => this.store.dispatch(fetchRandomNumbers(data)));
};

Latest.prototype.render = function(numbers) {
  const container = this.getDOMElement();
  container.innerHTML = "";

  numbers.forEach(number => {
    const listElement = document.createElement("li");
    listElement.classList.add("list-group-item");
    listElement.innerHTML = number;

    container.appendChild(listElement);
  });
};
