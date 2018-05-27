import axios from "axios";
import { timer } from "rxjs";
import { switchMap } from "rxjs/operators";

import { Component } from "../component";
import { fetchRandomNumbers } from "../actions";

export class Latest extends Component {
    constructor(selector, store) {
        super(selector);
        this.store = store;
        this.delayTime = 10000;
    }
    init() {
        timer(0, this.delayTime)
            .pipe(
                switchMap(() =>
                    axios
                        .get("http://localhost:3000/random-numbers")
                        .then(response => response.data.data)
                        .catch(console.error),
                ),
            )
            .subscribe(data => this.store.dispatch(fetchRandomNumbers(data)));
    }
    render(numbers) {
        const container = this.getDOMElement();
        container.innerHTML = "";

        numbers.forEach(number => {
            const listElement = document.createElement("li");
            listElement.classList.add("list-group-item");
            listElement.innerHTML = number;

            container.appendChild(listElement);
        });
    }
}
