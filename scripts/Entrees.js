import { setEntree } from "./TransientState.js";

const handleDishChange = ({ target: { name, value } }) => {
	name === "entree-choice" && setEntree(value);
};
document.addEventListener("change", handleDishChange);
export const BaseDish = async () => {
	const response = await fetch("http://localhost:8088/entrees");
	const entrees = await response.json();
	return entrees
		.map(
			({ name, price, id }) =>
				`<div class="radio-btn"><input type="radio" name="entree-choice" data-price="${price}" value="${id}"/> ${name}</div>`,
		)
		.join("");
};