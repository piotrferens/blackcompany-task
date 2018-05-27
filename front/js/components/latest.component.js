import axios from "axios";
import { timer } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { Component } from "../component";

export function Latest(selector, store) {
  Component.call(this, selector);
  this.store = store;
  this.delayTime = 2000;
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
    .subscribe(data => {
      this.store.dispatch({ type: "FETCH_RANDOM_NUMBERS", payload: data });
    });
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
