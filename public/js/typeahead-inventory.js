$(document).ready(function() {

	// instantiate the bloodhound suggestion engine
	var grains = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.grain); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  // prefetch: '../data/inventory/grains.json'
	  // remote: {
	  // 	url: '../data/inventory/grains.json',
	  // 	filter: function(data) {
	  // 		var returnArray = new Array();
	  // 		for (var i = 0; i < 12; i++ ) {
	  // 			returnArray.push(data[i]);
	  // 		}
	  // 		return returnArray;
	  // 	}
	  // }
	  local:
	  [
	    { grain: 'Oatmeal' },
	    { grain: 'White Rice' },
	    { grain: 'Spaghetti' },
	    { grain: 'Macaroni' },
	    { grain: 'Tortillas' },
	    { grain: 'Lasagna Noodles' },
	    { grain: 'Brown Rice' },
	    { grain: 'Linguine Pasta' },
	    { grain: 'Whole Wheat Bread' },
	    { grain: 'Rolls'},
	    { grain: 'Graham Crackers'},
	    { grain: 'Buttermilk Biscuit Dough'},
	    { grain: 'White Bread'},
	    { grain: 'Hamburger Buns'},
	    { grain: 'Egg Noodles'},
	    { grain: 'Whole Wheat Pasta'},
	    { grain: 'Bagel'},
	    { grain: 'Cereal' }
	  ]
	});

	var produces = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.produce); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  local: [
	    { produce: 'Tomatoes'},
	    { produce: 'Kombu'},
	    { produce: 'Lima Beans'},
	    { produce: 'Lupini Beans'},
	    { produce: 'Mung Beans'},
	    { produce: 'Pinto Beans'},
	    { produce: 'Red Lentils'},
	    { produce: 'Split Peas'},
	    { produce: 'Apricots'},
	    { produce: 'Blackberries'},
	    { produce: 'Grapefruit'},
	    { produce: 'Grapes'},
	    { produce: 'Lemons'},
	    { produce: 'Mangoes'},
	    { produce: 'Melons'},
	    { produce: 'Nectarines'},
	    { produce: 'Papayas'},
	    { produce: 'Pears'},
	    { produce: 'Pineapples'},
	    { produce: 'Pomegranates'},
	    { produce: 'Raspberries'},
	    { produce: 'Almonds'},
	    { produce: 'Brazil Nuts'},
	    { produce: 'Cashews'},
	    { produce: 'Chestnuts'},
	    { produce: 'Flax Seeds'},
	    { produce: 'Hazelnuts '},
	    { produce: 'Hemp Seeds'},
	    { produce: 'Macadamia Nuts'},
	    { produce: 'Peanuts'},
	    { produce: 'Pecans'},
	    { produce: 'Pine Nuts'},
	    { produce: 'Pistachios'},
	    { produce: 'Sesame Seeds'},
	    { produce: 'Sunflower Seeds'},
	    { produce: 'Walnuts'},
	    { produce: 'Olives'},
	    { produce: 'Bok Choy'},
	    { produce: 'Arugula'},
	    { produce: 'Collards'},
	    { produce: 'Pumpkins'},
	    { produce: 'Ginger'},
	    { produce: 'Green onions'},
	    { produce: 'Dried Cranberries'},
	    { produce: 'Adzuki Beans'},
	    { produce: 'Anasazi Beans'},
	    { produce: 'Black Turtle Beans'},
	    { produce: 'Black-Eyed Peas'},
	    { produce: 'Cannellini Beans'},
	    { produce: 'Garbanzo Beans (Chickpeas)'},
	    { produce: 'Flageolet Beans'},
	    { produce: 'Great Northern Beans'},
	    { produce: 'Green Lentils'},
	    { produce: 'Kidney Beans'},
	    { produce: 'Artichokes'},
	    { produce: 'Asparagus'},
	    { produce: 'Beets'},
	    { produce: 'Cauliflower'},
	    { produce: 'Brussels sprouts'},
	    { produce: 'Chile peppers'},
	    { produce: 'Eggplant'},
	    { produce: 'Mushrooms'},
	    { produce: 'Peas'},
	    { produce: 'Radishes'},
	    { produce: 'Rhubarb'},
	    { produce: 'Red Onions'},
	    { produce: 'Sweet Potatoes'},
	    { produce: 'Bok Choy'},
	    { produce: 'Celery'},
	    { produce: 'Spinach'},
	    { produce: 'Avocado'},
	    { produce: 'Bell Peppers'},
	    { produce: 'Onions'},
	    { produce: 'Garlic'},
	    { produce: 'Lettuce'},
	    { produce: 'Potatoes'},
	    { produce: 'Broccoli'},
	    { produce: 'Strawberries'},
	    { produce: 'Black Beans'},
	    { produce: 'Kale'},
	    { produce: 'Corn'},
	    { produce: 'Apples'},
	    { produce: 'Oranges'},
	    { produce: 'Banana'},
	    { produce: 'Cherries'},
	    { produce: 'Plums'},
	    { produce: 'Peaches'},
	    { produce: 'Carrots'},
	    { produce: 'Blueberries'},
	    { produce: 'Cucumber'},
	    { produce: 'Cabbage'}
	  ]
	});

	var meats = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.meat); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  local: [
	    { meat: 'Beef'},
	    { meat: 'Bacon'},
	    { meat: 'Flank Steak'},
	    { meat: 'Tri-Tip Steak'},
	    { meat: 'Chicken Breasts'},
	    { meat: 'Salmon'},
	    { meat: 'Catfish'},
	    { meat: 'Turkey'},
	    { meat: 'Pork'},
	    { meat: 'Veal'},
	    { meat: 'Lamb'},
	    { meat: 'Cod'},
	    { meat: 'Tuna'},
	    { meat: 'Tilapia'},
	    { meat: 'Chilean Seabass'},
	    { meat: 'Crab'},
	    { meat: 'Halibut'}
	  ]
	});

	var dairies = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.dairy); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  local: [
	    { dairy: 'Milk'},
	    { dairy: 'Ricotta Cheese'},
	    { dairy: 'Parmesan Cheese'},
	    { dairy: 'Yogurt'},
	    { dairy: 'Blue Cheese'},
	    { dairy: 'Provolone Cheese'},
	    { dairy: 'Mozzarella Cheese'},
	    { dairy: 'Sour Cream'},
	    { dairy: 'Cream Cheese'},
	    { dairy: 'Swiss Cheese'},
	    { dairy: 'Cheese'},
	    { dairy: 'Eggs'},
	    { dairy: 'Butter'}
	  ]
	});

	var condiments = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.condiment); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  local: [
	    { condiment: 'Hoisin Sauce'},
	    { condiment: 'Flour'},
	    { condiment: 'Sesame Oil'},
	    { condiment: 'Sherry Wine'},
	    { condiment: 'Safflower Oil'},
	    { condiment: 'Cocoa Powder'},
	    { condiment: 'Mustard'},
	    { condiment: 'Brown Sugar'},
	    { condiment: 'Sugar'},
	    { condiment: 'Salt'},
	    { condiment: 'Sea Salt'},
	    { condiment: 'Black Pepper'},
	    { condiment: 'Ketchup'},
	    { condiment: 'Italian Seasoning'},
	    { condiment: 'Spaghetti Sauce'},
	    { condiment: 'Mayonnaise'},
	    { condiment: 'Vinegar'},
	    { condiment: 'Cinnamon'},
	    { condiment: 'White vinegar'},
	    { condiment: 'Wasabi'},
	    { condiment: 'Sweet Relish'},
	    { condiment: 'Cinnamon'},
	    { condiment: 'Rosemary'},
	    { condiment: 'Dried Bread Crumbs'},
	    { condiment: 'Bisquick'},
	    { condiment: 'Walnut Oil'},
	    { condiment: 'Raspberry Jam'},
	    { condiment: 'Red Wine Vinegar'},
	    { condiment: 'Basil'},
	    { condiment: 'Wheat Germ'},
	    { condiment: 'Red Pepper Flakes'},
	    { condiment: 'Tobasco'},
	    { condiment: 'Ranch Dressing'},
	    { condiment: 'Horseradish'},
	    { condiment: 'Parsley'},
	    { condiment: 'Rice Vinegar'},
	    { condiment: 'Thyme'},
	    { condiment: 'Olive Oil'},
	    { condiment: 'Hummus'},
	    { condiment: 'Water'},
	    { condiment: 'Straberry Syrup'},
	    { condiment: 'Chocolate Chips'},
	    { condiment: 'Buttermilk Baking Mix'},
	    { condiment: 'Buttermilk'},
	    { condiment: 'Red Food Coloring'},
	    { condiment: 'Baking Soda'},
	    { condiment: 'Vanilla Extract'},
	    { condiment: 'Fish Sauce'},
	    { condiment: 'Tartar Sauce'},
	    { condiment: 'Steak Sauce'},
	    { condiment: 'Sriracha Sauce'},
	    { condiment: 'Soy Sauce'},
	    { condiment: 'Vegetable Oil'},
	    { condiment: 'Barbeque Sauce'},
	    { condiment: 'Lemon Juice'}
	  ]
	});

	// var noresults = new Bloodhound({
	//   datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.noresult); },
	//   queryTokenizer: Bloodhound.tokenizers.whitespace,
	//   local: [
	//   	{ noresult: 'hoisin sauce'},
	//     { noresult: 'sriracha sauce'},
	//     { noresult: 'soy sauce'},
	//     { noresult: 'vegetable oil'},
	//     { noresult: 'barbeque sauce'},
	//     { noresult: 'lemon juice'}
	//   ]
	// });

	// initialize the bloodhound suggestion engine
	grains.initialize();
	produces.initialize();
	meats.initialize();
	dairies.initialize();
	condiments.initialize();
	// noresults.initialize();

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
	    	header: '<h4 class="inventory-category-search-ac">Produce</h4>'	  	}
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
	// {
	// 	displayKey: 'noresult',
	// 	source: noresults.ttAdapter(),
	// 	templates: {
	// 		empty: "No results found."
	// 	}
	// }
	);
}).focus();