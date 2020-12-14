/*

• Create routes to do the following:
	• Accept apple or ale, returning "Apple or Ale?".
	• Accept the word whoa with an aribitrary number of os and as,returning"I know, right?!".
	• Take a first name and last name as parameters, returning a greeting for that user.
	• Take a word as a parameter and returning the word reversed.
	• Add a route that returns a friendly greeting for 
	  firstname and lastname query parameters on the route /hello.

*/

var express = require('express');
var app = express();

app.get('/a(pp)?le', function(request,snuffalufagus){
	snuffalufagus.send("Apple or Ale?");
});

app.get('/who+a+', function(req,res){
	res.send("I know right!")
});

app.get('/fullName/:firstName/:lastName', function(req,res){
	console.log(`Your name is ${req.params.firstName} ${req.params.lastName}`)
	res.send(`What's up ${req.params.firstName} ${req.params.lastName}`)
});

app.get('/dude/:word', function(req,res){
	var dude = req.params.word.split("").reverse().join("");
	res.send(dude)
});

//http://localhost:3000/hello?firstName=Jarvis&lastName=Potter
app.get('/hello', function(req,res){
	console.log(req)
	res.send(`Hello ${req.query.firstName} ${req.query.lastName}`)
});

app.listen(3000, function(req,res){
	console.log("Listening on port 3000, you can view this by going to http://localhost:3000")
});
