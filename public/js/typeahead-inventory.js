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
	    { produce: 'cabbage'}
	  ]
	});


	// initialize the bloodhound suggestion engine
	grains.initialize();
	produces.initialize();
	 
	// instantiate the typeahead UI
	$('.typeahead').typeahead(null, {
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
	});
});