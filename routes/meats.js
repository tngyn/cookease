var inventoryData = require('../public/data/inventorydata.json');
var meatsData = require('../public/data/meatsdata.json');
var meatsData2 = require('../public/data/meatsdata2.json');

exports.view = function(req, res) {
	//search through meatsData
	// keep count of ingredients matched
	// make new array to return

	var itemMatchCounter = 0;
	
	var ingredientsList = [];

	var numOfIngredients = inventoryData.ingredients.length;

	for (var i = 0; i < numOfIngredients; i++) {

		// Grains
		var numofGrains = inventoryData.ingredients[0]['grains'].length;

		for (var j = 0; j < numofGrains; j++) {
			ingredientsList.push(
				inventoryData.ingredients[0]['grains'][j].grain
			);
		}

		// Produce
		var numofProduces = inventoryData.ingredients[0]['produces'].length;

		for (var j = 0; j < numofProduces; j++) {
			ingredientsList.push(
				inventoryData.ingredients[0]['produces'][j].produce
			);
		}

		// Meats
		var numofMeats= inventoryData.ingredients[0]['meats'].length;

		for (var j = 0; j < numofMeats; j++) {
			ingredientsList.push(
				inventoryData.ingredients[0]['meats'][j].meat
			);
		}

		// Dairies
		var numofDairies = inventoryData.ingredients[0]['dairies'].length;

		for (var j = 0; j < numofDairies; j++) {
			ingredientsList.push(
				inventoryData.ingredients[0]['dairies'][j].dairy
			);
		}

		// Condiments
		var numofCondiments = inventoryData.ingredients[0]['condiments'].length;

		for (var j = 0; j < numofCondiments; j++) {
			ingredientsList.push(
				inventoryData.ingredients[0]['condiments'][j].condiment
			);
		}
	}


    // Loop for each recipe
    for(var i = 0; i < meatsData.meats.length; i++) {

    	var numRecipeIngredients = meatsData.meats[i].ingredients.length;

      itemMatchCounter = 0;  // Zero items intially found

      // Loop for each ingredient
      for(var j = 0; j < meatsData.meats[i].ingredients.length; j++) {

        // ingredient currently being searched for
        var searchStr = meatsData.meats[i].ingredients[j].ingredient.toLowerCase();

        

        // Loop through inventory list
        for(var k = 0; k < ingredientsList.length; k++)
        {
           var inventStr = ingredientsList[k].toLowerCase();
         
           // If ingredient was found
           if(searchStr==inventStr) {
             itemMatchCounter++;
           }

        }

        if(itemMatchCounter==numRecipeIngredients) {
         
            // Push recipe info to json file if not already added

            var added = false;

            // Loop through meatsData2 to see if recipe was already added
            for(var n = 0; n < meatsData2.meats.length; n++)
            {

            	if(meatsData2.meats[n].name == meatsData.meats[i].name) {
                  added = true;
            	}
            }

            // If recipe hasn't already been added
            if(added == false) {
            	meatsData2.meats.push(meatsData.meats[i]);
            }

        }

      }
    }
	res.render('meats', meatsData2);
};