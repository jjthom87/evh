/* Symbols in your routes */

//importing our express dependency to use to create our
//routes for our application
var express = require('express');

//storing the express() function in a variable, this is convention
var app = express();

app.get("/he*o/worldOne", function(req,res){
	//matches '/heo/worldOne', '/hello/worldOne', '/heyo/worldOne', etc.
	res.send('Testing out the wildcard(*)')
});

//plus signs match the preceding character as many times as it happens in a row
app.get('/hel+o/worldTwo', function(req,res){
	//matches '/helo/worldTwo', '/helllllllllllllllllo/worldTwo', etc
	res.send('Testing out the Plus Sign (+)')
})

//questions marks make a character optional
app.get('/hel?lo/worldThree', function(req,res){
	//matches '/helo/worldThree' or '/hello/worldThree'

	//see what happens if you dont include res.send after matching a route
	res.send('Testing out the question mark (?)')
})

//parenthesis can be used to group characters
app.get('/he(llo)?/worldFour', function(req,res){
	//here the 'llo' in 'hello' is optional
	//matches '/he/worldFour' or '/hello/worldFour'
	res.send('Testing out the Parenthesis ()')
})

//groups directly after a leading slash do not work
//will throw error complaing about an invalid regular expression group
app.get('/(hell)?o/worldFive', function(req,res){
	//will not get here
})

//this route is a wildcard, which means it represents every other
//route besides the route you set up.
//look at the response it sends back to the client 'uh oh! page not found'
//its stating that if the client hits a route that you did not set up,
//then that is the response that you are sending back to them
app.get("*", function(req,res){
	res.status(404).send('uh oh! page not found')
});

//telling your server to listen on this port
//this is the file to you will run 'node express.js' in order to start up your server
//you can now access your page by going to 'http://localhost:3000/<whatever routes you set up>'
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});