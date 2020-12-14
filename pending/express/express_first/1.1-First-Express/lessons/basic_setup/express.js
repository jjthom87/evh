/* Basic Express Set Up */

//importing our express dependency to use to create our
//routes for our application
var express = require('express');

//storing the express() function in a variable, this is convention
var app = express();

//creating a get route, for when our server is running, and
//this route is hit, whatever is inside the brackets will happen
//here, we are logging something when the route is hit, as well
//as sending information over to the client through res.send
//the information we are sending, a simple string, try it in postman
//if you dont have postman, go to google or download (orange icon thingy)
//depending on what port your server is running on, in your postman, select the "GET" option,
//and type in 'http://localhost:<port>/hello/world'. Click the send button, and the response
//will be sent to postman
app.get("/hello/world", function(req,res){
	console.log("got request for \"/hello/world\"");
	res.send('hello there you. welcome to express')
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