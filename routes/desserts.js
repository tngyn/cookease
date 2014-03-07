var inventoryData = require('../public/data/inventoryData.json');
var dessertsData = require('../public/data/dessertsdata.json');

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

	var dessertsData2 = {
        "desserts": []
    };

    // Loop for each recipe
    for(var i = 0; i < dessertsData.desserts.length; i++) {

    	var numRecipeIngredients = dessertsData.desserts[i].ingredients.length;

    	itemMatchCounter = 0;  // Zero items intially found

    	// Loop for each ingredient
    	for(var j = 0; j < dessertsData.desserts[i].ingredients.length; j++) {

        // ingredient currently being searched for
        var searchStr = dessertsData.desserts[i].ingredients[j].ingredient.toLowerCase();


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

            // Loop through dessertsData2 to see if recipe was already added
            for(var n = 0; n < dessertsData2.desserts.length; n++)
            {

            	if(dessertsData2.desserts[n].name == dessertsData.desserts[i].name) {
                  added = true;
            	}
            }

            // If recipe hasn't already been added
            if(added == false) {
            	dessertsData2.desserts.push(dessertsData.desserts[i]);
            	console.log(dessertsData.desserts[i]);
            }

        }

      }
    }

    console.log(dessertsData2);

    // Checks if there is a recipe to display
    // If no recipe to display, show empty page
    if (dessertsData2.desserts.length == 0) {
    	dessertsData2.showAll = false;
    	res.render('desserts', dessertsData2);
    }
    else {
    	dessertsData2.showAll = true
    	res.render('desserts', dessertsData2);
    }

};