const TranState = new Map();

TranState.set("entreeId", 0);
TranState.set("vegetableId", 0);
TranState.set("sideId", 0);

export const setEntree = (dishId) => {
	TranState.set("entreeId", dishId);
	console.log(TranState);
};
export const setVegetable = (vegetableId) => {
	TranState.set("vegetableId", vegetableId);
	console.log(TranState);
};
export const setSide = (sideId) => {
	TranState.set("sideId", sideId);
	console.log(TranState);
};
const resetState = () => {
	TranState.set("entreeId", 0);
	TranState.set("vegetableId", 0);
	TranState.set("sideId", 0);
};

export const saveOrder = async () => {
	await fetch("http://localhost:8088/orders", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(Object.fromEntries(TranState)),
	});
	const customEvent = new CustomEvent("newOrder");
	document.dispatchEvent(customEvent);
	resetState();
};