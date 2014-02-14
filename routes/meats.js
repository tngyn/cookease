var recipeData = require('../public/data/recipesdata.json');
var meatsData = require('../public/data/meatsdata.json');

exports.view = function(req, res) {
	res.render('meats', meatsData);
};