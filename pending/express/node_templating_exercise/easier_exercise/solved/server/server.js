//requiring express, which we installed from npm
var express = require('express');

//importing routes that you exported from routes.js
var routes = require('./controller/routes.js');

//express
var app = express();

//this is a basic use of middleware to be able
//to read all of the routes that you exported from routes.js
app.use('/', routes);

//this is setting the path of all of static/client side/front end files
//which are your js(jquery), html, & css
app.use(express.static('./client'));

//you use this kind of route when pushing to heroku
var PORT = process.env.PORT || 8000;

app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT);
});