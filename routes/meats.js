var recipeData = require('../recipesdata.json');
var meatsData = require('../meatsdata.json');

exports.view = function(req, res) {
	res.render('meats', meatsData);
};