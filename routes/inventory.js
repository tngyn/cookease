var inventoryData = require('../public/data/inventorydata.json');

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
