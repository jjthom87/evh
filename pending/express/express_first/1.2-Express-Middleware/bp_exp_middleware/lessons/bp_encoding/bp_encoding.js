//requiring express package using npm install express --save
var express = require('express');
//requiring body-parser packing using npm install express --save
var bodyParser = require('body-parser');

//storing our express function in a variable
var app = express();

//express interacting with body-parser to set up middleware
//to be able to read json being sent in
app.use(bodyParser.json());

//all of the above code is boilerplate code, which means it is most
//likely used in all node/express applications

// '/page' route, when you type in http://localhost:3000/page
// you're letting it know:
	//res.set is letting the client know that you're sending html HERE
	//res.send is the information that you're sending to the client
app.get('/page', function(req, res){
    res.set('Content-Type', 'text/html');
    res.send('<h1>Hello!</h1><br><a href="https://wwww.google.com">Google</a>');
});

//setting up an empty array
var arr = [];

// '/submit' is a post route, you won't hit this through the url
// this route is usually hit through your client side
// please try in postman - remember to put information in the body of the post in postman
// req.body is the information that is coming in through the post
// arr.push(req.body) is adding the body of the post to the empty array
// res.json is sending over the json object to the client
app.post('/submit', function(req, res){
    arr.push(req.body)
    res.status(200).send("Pikachu successful")
});

// '/json' is a get route, you can visit this route by going to http://localhost:3000/json
// res.json(arr.pop()) is sending the array above to the client, without the last item in the array 
// array.pop() takes out the last item in an array
app.get('/json', function(req,res){
	res.json(arr)
})

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