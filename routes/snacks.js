var recipeData = require('../recipesdata.json');
var snacksData = require('../snacksdata.json');

exports.view = function(req, res) {
	res.render('snacks', snacksData);
};