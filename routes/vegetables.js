var inventoryData = require('../public/data/inventorydata.json');
var vegetablesData = require('../public/data/vegetablesdata.json');

exports.view = function(req, res) {

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

	var vegetablesData2 = {
        "vegetables": []
    };

    // Loop for each recipe
    for(var i = 0; i < vegetablesData.vegetables.length; i++) {

    	var numRecipeIngredients = vegetablesData.vegetables[i].ingredients.length;

    	itemMatchCounter = 0;  // Zero items intially found

    	// Loop for each ingredient
    	for(var j = 0; j < vegetablesData.vegetables[i].ingredients.length; j++) {

        // ingredient currently being searched for
        var searchStr = vegetablesData.vegetables[i].ingredients[j].ingredient.toLowerCase();


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

            // Loop through vegetablesData2 to see if recipe was already added
            for(var n = 0; n < vegetablesData2.vegetables.length; n++)
            {

            	if(vegetablesData2.vegetables[n].name == vegetablesData.vegetables[i].name) {
                  added = true;
            	}
            }

            // If recipe hasn't already been added
            if(added == false) {
            	vegetablesData2.vegetables.push(vegetablesData.vegetables[i]);
            	console.log(vegetablesData.vegetables[i]);
            }

        }

      }
    }

    console.log(vegetablesData2);

    // Checks if there is a recipe to display
    // If no recipe to display, show empty page
    if (vegetablesData2.vegetables.length == 0) {
    	vegetablesData2.showAll = false;
    	res.render('vegetables', vegetablesData2);
    }
    else {
    	vegetablesData2.showAll = true
    	res.render('vegetables', vegetablesData2);
    }

};