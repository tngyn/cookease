var inventoryData = require('../inventorydata.json');

exports.view = function(req, res) {
	res.render('inventory', inventoryData);
}