/* How Params Work */

//importing our express dependency to use to create our
//routes for our application
var express = require('express');

//storing the express() function in a variable, this is convention
var app = express();

//params are represented by the :<name> of route
//when our server is up, and you go to http://localhost:3000/hello/<whatever>
//the whatever comes out as req.params.<whatever> and can now be used
//in conditionals, or to send back to the client
//an example of params on websites is a user's account.
//look at github.com/<your user name>...that route represents every single user
//when you sign in, it recognizes your username and your home page is that route
app.get("/hello/:name", function(req,res){
	//console.log(req.params.name)
	var name = req.params.name;
	//console.log(`got request for "/hello/${name}"`)
	res.send(`welcome to express ${name}`)
});

//here, it is req.params.id because that is what we called it after the :
app.get("/goodbye/:id", function(req,res){
	//console.log(req.params.id)
	var id = req.params.id;
	//console.log(`got request for "/goodbye/${id}"`)
	res.send(`welcome to express id#${id}`)
});

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