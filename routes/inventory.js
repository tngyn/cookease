var inventoryData = require('../public/data/inventorydata.json');
var ingredientsData = require('../public/data/ingredientsdata.json');

exports.view = function(req, res) {
	inventoryData.showAll = false;
	res.render('inventory', inventoryData);
};

exports.viewAll = function(req, res) {
	inventoryData.showAll = true;
	res.render('inventory', inventoryData);
};

exports.deleteItem = function(req, res) {
	var item = req.body.item;
	console.log(item);

	var numOfGrains = inventoryData.ingredients[0]['grains'].length;
	for (var i = 0; i < numOfGrains; i++) {
		if (inventoryData.ingredients[0]['grains'][i].grain == item) {
			inventoryData.ingredients[0]['grains'].splice(i, 1);

			res.redirect('/inventory');

			return;
		}
	};

	var numOfProduces = inventoryData.ingredients[0]['produces'].length;
	for (var i = 0; i < numOfProduces; i++) {
		if (inventoryData.ingredients[0]['produces'][i].produce == item) {
			inventoryData.ingredients[0]['produces'].splice(i, 1);

			res.redirect('/inventory');

			return;
		}
	};

	var numOfMeats = inventoryData.ingredients[0]['meats'].length;
	for (var i = 0; i < numOfMeats; i++) {
		if (inventoryData.ingredients[0]['meats'][i].meat == item) {
			inventoryData.ingredients[0]['meats'].splice(i, 1);

			res.redirect('/inventory');

			return;
		}
	};

	var numOfDairies = inventoryData.ingredients[0]['dairies'].length;
	for (var i = 0; i < numOfDairies; i++) {
		if (inventoryData.ingredients[0]['dairies'][i].dairy == item) {
			inventoryData.ingredients[0]['dairies'].splice(i, 1);

			res.redirect('/inventory');

			return;
		}
	};

	var numOfCondiments = inventoryData.ingredients[0]['condiments'].length;
	for (var i = 0; i < numOfCondiments; i++) {
		if (inventoryData.ingredients[0]['condiments'][i].condiment == item) {
			inventoryData.ingredients[0]['condiments'].splice(i, 1);

			res.redirect('/inventory');

			return;
		}
	};

};

// exports.addIngredient = function(req, res){

// 	var ingredientTyped = req.query.formsearch;

// 	// Checks if ingredient typed is a grain in json file
// 	// if so, it can be added into inventory
// 	var numOfGrains = ingredientsData.ingredients[0]['grains'].length;
// 	for (var i = 0; i < numOfGrains; i++) {
// 		if(ingredientsData.ingredients[0]['grains'][i].grain == ingredientTyped) {
// 			var newIngredient = {
// 				"grain" : ingredientTyped,
// 			};

// 			console.log(newIngredient);
// 			console.log(inventoryData);
// 			inventoryData.ingredients[0]['grains'].push(newIngredient);
// 			console.log(inventoryData.ingredients[0]['grains']);
// 			return;
// 		}
// 	};

// 	// Checks if ingredient typed is a produce in json file
// 	// if so, it can be added into inventory
// 	var numOfProduces = ingredientsData.ingredients[0]['produces'].length;
// 	for (var i = 0; i < numOfProduces; i++) {
// 		if(ingredientsData.ingredients[0]['produces'][i].produce == ingredientTyped) {
// 			var newIngredient = {
// 				"produce" : ingredientTyped,
// 			};

// 			console.log(newIngredient);
// 			console.log(inventoryData);
// 			inventoryData.ingredients[0]['produces'].push(newIngredient);
// 			console.log(inventoryData.ingredients[0]['produces']);
// 			return;
// 		}
// 	};

// 	// Checks if ingredient typed is a meat in json file
// 	// if so, it can be added into inventory
// 	var numOfMeats = ingredientsData.ingredients[0]['meats'].length;
// 	for (var i = 0; i < numOfMeats; i++) {
// 		if(ingredientsData.ingredients[0]['meats'][i].meat == ingredientTyped) {
// 			var newIngredient = {
// 				"meat" : ingredientTyped,
// 			};

// 			console.log(newIngredient);
// 			console.log(inventoryData);
// 			inventoryData.ingredients[0]['meats'].push(newIngredient);
// 			console.log(inventoryData.ingredients[0]['meats']);
// 			return;
// 		}
// 	};
	
// 	// Checks if ingredient typed is a dairy in json file
// 	// if so, it can be added into inventory
// 	var numOfDairies = ingredientsData.ingredients[0]['dairies'].length;
// 	for (var i = 0; i < numOfDairies; i++) {
// 		if(ingredientsData.ingredients[0]['dairies'][i].dairy == ingredientTyped) {
// 			var newIngredient = {
// 				"dairy" : ingredientTyped,
// 			};

// 			console.log(newIngredient);
// 			console.log(inventoryData);
// 			inventoryData.ingredients[0]['dairies'].push(newIngredient);
// 			console.log(inventoryData.ingredients[0]['dairies']);
// 			return;
// 		}
// 	};
	
// 	// Checks if ingredient typed is a condiment in json file
// 	// if so, it can be added into inventory
// 	var numOfCondiments = ingredientsData.ingredients[0]['condiments'].length;
// 	for (var i = 0; i < numOfCondiments; i++) {
// 		if(ingredientsData.ingredients[0]['condiments'][i].condiment == ingredientTyped) {
// 			var newIngredient = {
// 				"condiment" : ingredientTyped,
// 			};

// 			console.log(newIngredient);
// 			console.log(inventoryData);
// 			inventoryData.ingredients[0]['condiments'].push(newIngredient);
// 			console.log(inventoryData.ingredients[0]['condiments']);
// 			return;
// 		}
// 	};

// 	console.log("testing to see if it returned");
// };