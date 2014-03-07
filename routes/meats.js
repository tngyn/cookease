var inventoryData = require('../public/data/inventorydata.json');
var meatsData = require('../public/data/meatsdata.json');

exports.view = function(req, res) {
	//search through meatsData
	// keep count of ingredients matched
	// make new array to return

	var itemMatchCounter = 0;
	
	var ingredientsList = [];

	var numOfIngredients = inventoryData.ingredients.length;
	console.log(numOfIngredients);

	for (var i = 0; i < numOfIngredients; i++) {

		// Grains
		var numofGrains = inventoryData.ingredients[0]['grains'].length;
		console.log(numofGrains);

		for (var j = 0; j < numofGrains; j++) {
			ingredientsList.push(
				inventoryData.ingredients[0]['grains'][j].grain
			);
		}

		// Produce
		var numofProduces = inventoryData.ingredients[0]['produces'].length;
		console.log(numofProduces);

		for (var j = 0; j < numofProduces; j++) {
			ingredientsList.push(
				inventoryData.ingredients[0]['produces'][j].produce
			);
		}

		// Meats
		var numofMeats= inventoryData.ingredients[0]['meats'].length;
		console.log(numofMeats);

		for (var j = 0; j < numofMeats; j++) {
			ingredientsList.push(
				inventoryData.ingredients[0]['meats'][j].meat
			);
		}

		// Dairies
		var numofDairies = inventoryData.ingredients[0]['dairies'].length;
		console.log(numofDairies);

		for (var j = 0; j < numofDairies; j++) {
			ingredientsList.push(
				inventoryData.ingredients[0]['dairies'][j].dairy
			);
		}

		// Condiments
		var numofCondiments = inventoryData.ingredients[0]['condiments'].length;
		console.log(numofCondiments);

		for (var j = 0; j < numofCondiments; j++) {
			ingredientsList.push(
				inventoryData.ingredients[0]['condiments'][j].condiment
			);
		}
	}

	console.log(ingredientsList);


	res.render('meats', meatsData);
};