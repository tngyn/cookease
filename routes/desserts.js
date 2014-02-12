var recipeData = require('../recipesdata.json');
var dessertsData = require('../dessertsdata.json');

exports.view = function(req, res) {
	res.render('desserts', dessertsData);
};