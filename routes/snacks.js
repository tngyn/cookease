var inventoryData = require('../public/data/inventorydata.json');
var snacksData = require('../public/data/snacksdata.json');

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

	var snacksData2 = {
        "snacks": []
    };

    // Loop for each recipe
    for(var i = 0; i < snacksData.snacks.length; i++) {

    	var numRecipeIngredients = snacksData.snacks[i].ingredients.length;

    	itemMatchCounter = 0;  // Zero items intially found

    	// Loop for each ingredient
    	for(var j = 0; j < snacksData.snacks[i].ingredients.length; j++) {

        // ingredient currently being searched for
        var searchStr = snacksData.snacks[i].ingredients[j].ingredient.toLowerCase();


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

            // Loop through snacksData2 to see if recipe was already added
            for(var n = 0; n < snacksData2.snacks.length; n++)
            {

            	if(snacksData2.snacks[n].name == snacksData.snacks[i].name) {
                  added = true;
            	}
            }

            // If recipe hasn't already been added
            if(added == false) {
            	snacksData2.snacks.push(snacksData.snacks[i]);
            	console.log(snacksData.snacks[i]);
            }

        }

      }
    }

    console.log(snacksData2);

    // Checks if there is a recipe to display
    // If no recipe to display, show empty page
    if (snacksData2.snacks.length == 0) {
    	snacksData2.showAll = false;
    	res.render('snacks', snacksData2);
    }
    else {
    	snacksData2.showAll = true
    	res.render('snacks', snacksData2);
    }

};