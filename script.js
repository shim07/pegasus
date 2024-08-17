const allergicFoodsList = document.getElementById("allergic-foods-list");
const foodNameInput = document.getElementById("food-name");
const checkFoodBtn = document.getElementById("check-food-btn");
const resultDiv = document.getElementById("result");

let allergicFoods = [];

// Function to add allergic foods to the list
allergicFoodsList.addEventListener("click", (e) => {
	if (e.target.tagName === "INPUT") {
		const allergicFood = e.target.value.trim();
		if (allergicFood !== "") {
			allergicFoods.push(allergicFood);
			e.target.value = "";
		}
	}
});

// Function to check for allergic ingredients in the food
checkFoodBtn.addEventListener("click", () => {
	const foodName = foodNameInput.value.trim();
	if (foodName !== "") {
		const ingredients = foodName.split(",");
		const allergicIngredients = [];
		ingredients.forEach((ingredient) => {
			if (allergicFoods.includes(ingredient.trim())) {
				allergicIngredients.push(ingredient.trim());
			}
		});
		if (allergicIngredients.length > 0) {
			resultDiv.innerHTML = `The food "${foodName}" contains the following allergic ingredients: ${allergicIngredients.join(", ")}`;
		} else {
			resultDiv.innerHTML = `The food "${foodName}" does not contain any allergic ingredients.`;
		}
		// Clear the input after checking
		foodNameInput.value = "";
	}
});


