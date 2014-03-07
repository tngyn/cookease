
var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');

////////////

var http = require('http');
var path = require('path');

var handlebars = require('express3-handlebars');
//var mongoose = require('mongoose');

var inventory_added = require('./routes/inventory_added');
var inventory = require('./routes/inventory');
var meats = require('./routes/meats');
var vegetables = require('./routes/vegetables');
var snacks = require('./routes/snacks');
var desserts = require('./routes/desserts');
////////////

///////////
//var local_database_name = 'cookease';
//var local_database_uri  = 'mongodb://localhost/' + local_database_name
//var database_uri = process.env.MONGOLAB_URI || local_database_uri
//mongoose.connect(database_uri);
///////////

// Create the server instance
var app = express();

// Print logs to the console and compress pages we send

///////////
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
////////////

// app.use(express.logger());
// app.use(express.compress());



//////////////////////
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/inventory_added', inventory_added.addIngredient);
app.get('/inventory', inventory.view);
app.get('/meats', meats.view);
app.get('/vegetables', vegetables.view);
app.get('/snacks', snacks.view);
app.get('/desserts', desserts.view);
app.get('/inventory_show_all', inventory.viewAll)

///////////////////////



// Return all pages in the /static directory
// whenever they are requested at '/'
// e.g., http://localhost:3000/index.html
// maps to /static/index.html on this machine
app.use(express.static(__dirname + '/static'));

// Start the server
var port = process.env.PORT || PORT; // 80 for web, 3000 for development
app.listen(port, function() {
	console.log("Node.js server running on port %s", port);
});