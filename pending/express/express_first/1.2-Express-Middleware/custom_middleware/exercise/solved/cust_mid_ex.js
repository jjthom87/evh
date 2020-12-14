/*

• Create middleware for the earlier examples to make a log of incoming requests. 
  Include the original route and a timestamp. Have the log write to a file called "log.txt" 
  in your project directory.
• Hint: the original route for the request is on request.originalUrl.
BONUS: every time you hit a route, the log.txt gets replace. instead of replacing,
       append all of the routes to the file. We want to see all of them ;)

*/

//requiring express package using npm install express --save
var express = require('express');

//requiring express, which does not need an npm install because it 
//is built into node
var fs = require('fs');

//storing our express function in a variable
var app = express();

//this is custom middleware
//you can create your custom middleware by using app.use
//middleware represents what happens between the route being hit and a response being sent to the client
//You can decide to do whatever you please in the middleware
//in this situation, we are saying that if the url includes a query string, 
	//i.e. after the question mark here "http://localhost:3000?name=jared"
//then send a 400 to the client, making them unable to move through the app
//if there is no query string, then next() is used to continue on through the application
//for more information on Object.keys(req.query), look at the console.log, google it, have fun with it
app.use(function(req,res,next){
	if(Object.keys(req.query).length > 0){
		res.status(400).send("You can't use query strings!")
	} else {
		next();
	}
});

//more custom middleware here, for every request that is hit on your app,
//we are telling it what we want to do, which is in the instructions above
app.use(function(req,res,next){
	fs.readFile('./log.txt', 'utf-8', function(err,data){
		var writeToFile = data + "\nRoute: " + req.originalUrl + ", Timestamp: " + Date.now()
		fs.writeFile('./log.txt', writeToFile, function(err){
			if(err) throw err;
			console.log(req)
			res.status(200).send('written to file')
		})
	})
})

//setting up a get route '/hello/world'
//you can hit this route on postman or the url with 'http://localhost:3000/hello/world'
//when this request is hit, then we are console.logging in terminal, and sending a response to the client
app.get("/hello/world", function(req,res){
	console.log("got request for \"/hello/world\"");
	res.send('hello there you. welcome to express')
});

//this wildcard route picks up every route, put it on the bottom above
//your app.listen. It will let you know if the route that the client tried 
//to hit is not set up in your express application
//see what happens if you remove the res.status(*) here,
//you can set up your application where if the route wasn't set up, then whatever happens
//goes between the brackets here
app.get("*", function(req,res){
	res.status(404).send('uh oh! page not found')
});

//sets up your server to be visited on http://localhost:3000
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});