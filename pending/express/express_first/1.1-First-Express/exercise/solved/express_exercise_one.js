/*

• Create routes to do the following:
	• Accept apple or ale, returning "Apple or Ale?".
	• Accept the word whoa with an aribitrary number of os and as,returning"I know, right?!".
	• Take a first name and last name as parameters, returning a greeting for that user.
	• Take a word as a parameter and returning the word reversed.
	• Add a route to one that returns a friendly greeting for 
	  firstname and lastname query parameters on the route /hello.

*/

var express = require('express');
var app = express();

app.get('/a(pp)?le', function(req,res){
	res.send('Apple or Ale?')
});

app.get('/who+a+', function(req,res){
	res.send('I know, right?!')
});

app.get('/fullName/:firstName/:lastName', function(req,res){
	res.send(`${req.params.firstName}  ${req.params.lastName}, welcome to express`)
});

app.get('/reverse-word/:word', function(req,res){
	res.send(`${req.params.word.split("").reverse().join("")}`)
});

app.get("/hello", function(req,res){
	console.log(req.query);
	//http://localhost:3000/hello?firstName=Jared&lastName=Thomas
	res.send("What is up " + req.query.firstName + " " + req.query.lastName);
});

app.get("*", function(req,res){
	res.status(404).send('uh oh! page not found')
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
