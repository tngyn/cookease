$(document).ready(function() {

	// instantiate the bloodhound suggestion engine
	var grains = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.grain); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  local: [
	    { grain: 'oatmeal' },
	    { grain: 'white rice' },
	    { grain: 'spaghetti' },
	    { grain: 'macaroni' },
	    { grain: 'tortillas' },
	    { grain: 'brown rice' },
	    { grain: 'noodles' },
	    { grain: 'pasta' },
	    { grain: 'whole wheat bread' },
	    { grain: 'rolls'},
	    { grain: 'bagel'},
	    { grain: 'cereal' }
	  ]
	});

	var produces = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.produce); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  local: [
	    { produce: 'tomato'},
	    { produce: 'garlic'},
	    { produce: 'celery'},
	    { produce: 'spinach'},
	    { produce: 'avocado'},
	    { produce: 'onion'},
	    { produce: 'garlic'},
	    { produce: 'dried cranberries'},
	    { produce: 'lettuce'},
	    { produce: 'potato'},
	    { produce: 'broccoli'},
	    { produce: 'strawberries'},
	    { produce: 'black beans'},
	    { produce: 'kale'},
	    { produce: 'cucumber'},
	    { produce: 'cabbage'}
	  ]
	});

	var meats = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.meat); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  local: [
	    { meat: 'tri-tip beef'},
	    { meat: 'chicken breasts'},
	    { meat: 'salmon'},
	    { meat: 'catfish'},
	    { meat: 'turkey'},
	    { meat: 'ham'},
	    { meat: 'halibut'}
	  ]
	});

	var dairies = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.dairy); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  local: [
	    { dairy: 'milk'},
	    { dairy: 'yogurt'},
	    { dairy: 'provolone cheese'},
	    { dairy: 'eggs'},
	    { dairy: 'butter'}
	  ]
	});

	var condiments = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.condiment); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  local: [
	    { condiment: 'hoisin sauce'},
	    { condiment: 'sriracha sauce'},
	    { condiment: 'soy sauce'},
	    { condiment: 'vegetable oil'},
	    { condiment: 'barbeque sauce'},
	    { condiment: 'lemon juice'}
	  ]
	});

	// initialize the bloodhound suggestion engine
	grains.initialize();
	produces.initialize();
	meats.initialize();
	dairies.initialize();
	condiments.initialize();
	 
	// instantiate the typeahead UI
	$('.typeahead').typeahead({
		highlight:true
	},
	{
		displayKey: 'grain',
		source: grains.ttAdapter(),
		templates: {
	    	header: '<h4 class="inventory-category-search-ac">Grains</h4>'
	  	}
	},
	{
		displayKey: 'produce',
		source: produces.ttAdapter(),
		templates: {
	    	header: '<h4 class="inventory-category-search-ac">Produce</h4>'
	  	}
	},
	{
		displayKey: 'meat',
		source: meats.ttAdapter(),
		templates: {
			header: '<h4 class="inventory-category-search-ac">Meats</h4>'
		}
	},
	{
		displayKey: 'dairy',
		source: dairies.ttAdapter(),
		templates: {
			header: '<h4 class="inventory-category-search-ac">Dairy</h4>'
		}
	},
	{
		displayKey: 'condiment',
		source: condiments.ttAdapter(),
		templates: {
			header: '<h4 class="inventory-category-search-ac">Condiments</h4>'
		}
	}
	);


});