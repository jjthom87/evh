//requiring express package using npm install express --save
var express = require('express');
//requiring body-parser packing using npm install express --save
var parser = require('body-parser');

//storing our express function in a variable
var app = express();

//express interacting with body-parser to set up middleware
//to be able to read json being sent in
app.use(parser.json());

//all of the above code is boilerplate code, which means it is most
//likely used in all node/express applications

// '/submit' is a post route, you won't hit this through the url
// this route is usually hit through your client side
// please try in postman - remember to put information in the body of the post in postman
// req.body is the information that is coming in through the post
// res.send is sending over the name in the req.body to the client
app.post("/submit", function(req,res){
	console.log(req.body);
	res.send("body of post is " + req.body.name)
});

//this wildcard route picks up every route, put it on the bottom above
//your app.listen. It will let you know if the route that the client tried 
//to hit is not set up in your express application
app.get("*", function(req,res){
	res.status(404).send('uh oh! page not found')
});

//sets up your server to be visited on http://localhost:3000
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});