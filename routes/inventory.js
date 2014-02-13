var inventoryData = require('../public/data/inventorydata.json');

exports.view = function(req, res) {
	res.render('inventory', inventoryData);
}