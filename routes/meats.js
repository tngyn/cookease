data = require('../recipesdata.json');

exports.view = function(req, res) {
	res.render('meats', data);
};