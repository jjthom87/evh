/*

• Create routes to do the following:
	• Take a first name and last name as parameters, returning a greeting for that user.
	• Take a word as a parameter and returning the word reversed.
	• Add a route that returns a friendly greeting on the route /hello
	  that has query parameters for firstName and lastName.

*/

var express = require('express');
var app = express();

app.get('/fullName/:firstName/:lastName', function(req,res){
	console.log(`Your name is ${req.params.firstName} ${req.params.lastName}`)
	res.send(`What's up ${req.params.firstName} ${req.params.lastName}`)
});

app.get('/dude/:word', function(req,res){
	var dude = req.params.word.split("").reverse().join("");
	res.send(dude)
});

// http://localhost:3000/hello?firstName=Bob&lastName=Saget
app.get('/hello', function(req,res){
	// console.log(req)
	res.send(`Hello ${req.query.firstName} ${req.query.lastName}`)
});

app.listen(3000, function(req,res){
	console.log("Listening on port 3000, you can view this by going to http://localhost:3000")
});
