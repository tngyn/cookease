var inventoryData = require('../public/data/inventorydata.json');

exports.view = function(req, res) {
	inventoryData.showAll = false;
	res.render('inventory', inventoryData);
}

exports.viewAll = function(req, res) {
	inventoryData.showAll = true;
	res.render('inventory', inventoryData);
}