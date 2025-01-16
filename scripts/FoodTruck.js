import { Sales } from "./Sales.js";
import { BaseDish } from "./Entrees.js";
import { Sides } from "./SideDishes.js";
import { Veggies } from "./Vegetables.js";
import { saveOrder } from "./TransientState.js";

document.addEventListener(
	"click",
	({ target: { id } }) => id === "purchase" && saveOrder(),
);
export const FoodTruck = async () => {
	const salesHTML = await Sales();
	const baseDishHTML = await BaseDish();
	const sideHTML = await Sides();
	const veggieHtml = await Veggies();

	return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
          <div class="options">
            <h2>Base Dish</h2>
              ${baseDishHTML}
          </div>
          <div class="options">
            <h2>Vegetable</h2>
              ${veggieHtml}
          </div>
          <div class="options">
              <h2>Sides</h2>
              ${sideHTML}
          </div>
        </article>
        <button id="purchase">Purchase Combo</button>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `;
};