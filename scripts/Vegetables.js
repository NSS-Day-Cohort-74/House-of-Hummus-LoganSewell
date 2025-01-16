import { setVegetable } from "./TransientState.js";

const handleVeggieChange = ({ target: { name, value } }) => {
	name === "vegetable-choice" && setVegetable(value);
};
document.addEventListener("change", handleVeggieChange);
export const Veggies = async () => {
	const response = await fetch("http://localhost:8088/vegetables");
	const veggies = await response.json();
	return veggies
		.map(
			({ type, price, id }) =>
				`<div class="radio-btn"><input type="radio" name="vegetable-choice" data-price="${price}" value="${id}"/> ${type}</div>`,
		)
		.join("");
};