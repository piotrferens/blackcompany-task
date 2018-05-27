import { Component } from "../component";

export class Ranking extends Component {
    constructor(selector) {
        super(selector);
    }
    render(numbers) {
        const container = this.getDOMElement();
        container.innerHTML = "";

        numbers.forEach(number => {
            const listElement = document.createElement("li");
            listElement.classList.add("list-group-item");
            listElement.innerHTML = `${number.value} (${number.occurrence})`;

            container.appendChild(listElement);
        });
    }
}
