var recipeData = require('../recipesdata.json');
var vegetablesData = require('../vegetablesdata.json');

exports.view = function(req, res) {
	res.render('vegetables', vegetablesData);
};