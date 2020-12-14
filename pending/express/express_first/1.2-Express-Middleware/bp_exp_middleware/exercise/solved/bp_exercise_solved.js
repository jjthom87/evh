/*

• Install body-parser.
• Use the JSON middleware to parse requests.
• Add a POST handler on /submit. Have the method print out the request.body.
• If the payload does not have a member called foo, return a 404.
• Start your server.

*/

var express = require('express');
var parser = require('body-parser');
var request = require('request');

var app = express();

app.use(parser.json());

app.post("/submit", function(req,res){
	console.log(req.body);
	if(!req.body.foo){
		res.status(404).send("No Foo? Foo You!")
	} else {
		res.status(200).send("Foo Yea!")
	}
});

app.get("*", function(req,res){
	res.status(404).send('uh oh! page not found')
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});