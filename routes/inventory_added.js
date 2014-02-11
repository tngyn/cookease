var inventoryData = require('../inventorydata.json');

exports.addIngredient = function(req, res){
	res.render('inventory_added', inventoryData);

	var newName = req.query.formsearch;
	var newIngredient = {
		"name" : newName
	};

	console.log(newIngredient);
	inventoryData["ingredients"].push(newIngredient);
};