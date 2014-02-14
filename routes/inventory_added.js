var inventoryData = require('../public/data/inventorydata.json');

exports.addIngredient = function(req, res){
	res.render('inventory_added', inventoryData);

	var ingredientTyped = req.query.formsearch;


	// if() {
	// 	var newIngredient = {
	// 		"grain" : ingredientTyped
	// 	};

	// 	console.log(newIngredient);
	// 	console.log(inventoryData);
	// 	inventoryData.ingredients[0]['grains'].push(newIngredient);
	// 	console.log(inventoryData.ingredients[0]['grains']);
	// }
	// else if() {
	// 	var newIngredient = {
	// 		"produce" : ingredientTyped
	// 	};

	// 	console.log(newIngredient);
	// 	console.log(inventoryData);
	// 	inventoryData.ingredients[0]['produces'].push(newIngredient);
	// 	console.log(inventoryData.ingredients[0]['produces']);
	// }
	// else if() {
	// 	var newIngredient = {
	// 		"meat" : ingredientTyped
	// 	};

	// 	console.log(newIngredient);
	// 	console.log(inventoryData);
	// 	inventoryData.ingredients[0]['meats'].push(newIngredient);
	// 	console.log(inventoryData.ingredients[0]['meats']);
	// }
	// else if() {
	// 	var newIngredient = {
	// 		"dairy" : ingredientTyped
	// 	};

	// 	console.log(newIngredient);
	// 	console.log(inventoryData);
	// 	inventoryData.ingredients[0]['dairies'].push(newIngredient);
	// 	console.log(inventoryData.ingredients[0]['dairies']);
	// }
	// else {
	// 	var newIngredient = {
	// 		"condiment" : ingredientTyped
	// 	};

	// 	console.log(newIngredient);
	// 	console.log(inventoryData);
	// 	inventoryData.ingredients[0]['condiments'].push(newIngredient);
	// 	console.log(inventoryData.ingredients[0]['condiments']);
	// }



	var newIngredient = {
		"dairy" : ingredientTyped
	};

	console.log(newIngredient);
	console.log(inventoryData);
	inventoryData.ingredients[0]['dairies'].push(newIngredient);
	console.log(inventoryData.ingredients[0]['dairies']);
};