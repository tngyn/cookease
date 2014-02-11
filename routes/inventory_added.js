var data = require('../inventorydata.json');

exports.addIngredient = function(req, res){
	res.render('inventory_added', data);

	var newName = req.query.formsearch;
	var newIngredient = {
		"name" : newName
	};

	console.log(newIngredient);
	data["ingredients"].push(newIngredient);
};