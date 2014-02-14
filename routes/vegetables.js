var recipeData = require('../public/data/recipesdata.json');
var vegetablesData = require('../public/data/vegetablesdata.json');

exports.view = function(req, res) {
	res.render('vegetables', vegetablesData);
};