var recipeData = require('../public/data/recipesdata.json');
var dessertsData = require('../public/data/dessertsdata.json');

exports.view = function(req, res) {
	res.render('desserts', dessertsData);
};