/*

• Install body-parser.
• Use the JSON middleware to parse requests.
• Add a POST handler on /submit. Have the method print out the request.body.
• If the payload does not have a key called foo, return a 404.
• Start your server.

{
	name: 'jared',
	favorite_animal: 'whatever'
}

your keys are 'name' & 'favorite_animal'

*/

//
//requiring express package using npm install express --save
var express = require('express');
//requiring body-parser packing using npm install express --save
var parser = require('body-parser');

//storing our express function in a variable
var app = express();

//express interacting with body-parser to set up middleware
//to be able to read json being sent in
app.use(parser.json());

//when my server is running, i am able to get to this route by typing
//in the url "http://localhost:4545", we are merely sending over a string of "/"
//try it out
app.get('/', function(request, response){
	response.send("/");
});

// '/submit' is a post route, you won't hit this through the url
// this route is usually hit through your client side
// please try in postman - remember to put information in the body of the post in postman
//also for the headers, be sure to put on the left: ContentType, right: application/json
// req.body is the information that is coming in through the post, it is being console.logged below
//here, we are checking to see if a key in the request.body is foo
//The keys in the json object below are name and age:
	/*
		{
			name: 'jared',
			age: 30
		}
	*/
//the conditional below is checking to see if the there is a key called foo
//and sending a response to the client based on that
app.post('/submit', function(request, response){
	console.log(request.body);
	if(!request.body.foo){
		response.status(404).send("Foo You");
	} else {
		response.status(200).send("You're Beautiful");
	}
});

//sets up your server to be visited on http://localhost:4545
app.listen(4545, function(){
	console.log("Visit http://localhost:4545 to see this running locally")
})
