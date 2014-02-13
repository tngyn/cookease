var recipeData = require('../public/data/recipesdata.json');
var snacksData = require('../public/data/snacksdata.json');

exports.view = function(req, res) {
	res.render('snacks', snacksData);
};