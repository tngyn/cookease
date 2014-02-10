// // web.js
// var express = require("express");
// var logfmt = require("logfmt");
// var app = express();

// app.use(logfmt.requestLogger());

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

// var port = Number(process.env.PORT || 5000);
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });

var PORT = 3000;

// Express is a web framework for node.js
// that makes nontrivial applications easier to build
var express = require('express');

////////////
var handlebars = require('express3-handlebars')
////////////

// Create the server instance
var app = express();

// Print logs to the console and compress pages we send

///////////
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
////////////

app.use(express.logger());
app.use(express.compress());

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