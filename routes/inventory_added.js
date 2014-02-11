var inventoryData = require('../inventorydata.json');

exports.addIngredient = function(req, res){
	res.render('inventory_added', inventoryData);

	var ingredientTyped = req.query.formsearch;
	var newIngredient = {
		"ingredient" : ingredientTyped
	};

	console.log(newIngredient);
	inventoryData["ingredients"].push(newIngredient);
};