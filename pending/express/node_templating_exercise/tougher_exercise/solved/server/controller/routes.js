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
var obj = require('../model/data_object.js');
var html_creator = require('../helpers/html_creator.js');

//this is the connection from our client side to our server side here
//we are saying that our home route is going to be our index.html file
//this is how you set up where your routes are hitting
//this is a get that is expecting a path to a file
router.get('/', function(req,res){
	//the console.logs and anything else between the brackets will only show up when the root route is hit
	//console.log(req)
	//console.log(__dirname)
	res.sendFile(path.join(__dirname, '../../client/html/index.html'));
});

//This is my params route
//as you can tell, on my front end, this is coming from when i am doing
//the window.location.href = '/profile/' + name signifies when this route is hit
//which is basically saying, that when a dog picture is clicked, then it will
//hit this route, which is saying, when it is hit, that :dog === the $(this).data('name'),
//of the dog, which matches a dogs name in the object, which is then storing it in the dog
//array that i created, then I am stating that if the dog array is not empty, send over
//html. The html function is being imported from another file, check it out.
//if there are no items in the dog array, then i am stating that page is not found
router.get('/profile/:dog', function(req,res){
	var dog = [];
	for(var i = 0; i < obj.length; i++){
		if(obj[i].name === req.params.dog){
			dog.push(obj[i])
		}
	}
	if(dog.length > 0){
		res.set('Content-Type', 'text/html');
		res.send(html_creator(dog[0]));
	} else {
		res.status(400).send("Page Not Found")
	}
});

//exporing our router, which is basically an object holding all of our routes
module.exports = router;