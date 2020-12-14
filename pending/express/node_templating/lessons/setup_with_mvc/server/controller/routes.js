/*
	Setting up my routes for my application in this file
*/

//requiring express, which we installed from npm
var express = require('express');
//requiring path, which does not need an npm install because it is built into node
var path = require('path');

//storing express.Router() in a variable called router
//Router() is a function built into express which can store and export routes
var router = express.Router();

//requiring our data object from our object.js file
var obj = require('../models/object.js');

//this is the connection from our client side to our server side here
//we are saying that our home route is going to be our index.html file
//this is how you set up where your routes are hitting
//this is a get that is expecting a path to a file
router.get('/', function(req,res){
	//the console.logs and anything else between the brackets will only show up when the root route is hit
	//console.log(req)
	//console.log(__dirname)
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

//this is a get route setting up that is merely sending information to the client,
//with no connection to an html file. You will see that we are calling this route
//with ajax in our jquery file on the client side, and getting the information that 
//we are sending through here
router.get('/api/getRoute', function(req,res){
	//the console.logs and anything else between the brackets will only show up when the '/api/getRoute' route is hit
	//console.log(req)
	//console.log(obj)
	res.json(obj)
});

//exporing our router, which is basically an object holding all of our routes
module.exports = router;