/* Multiple Routes in one call */

//importing our express dependency to use to create our
//routes for our application
var express = require('express');

//storing the express() function in a variable, this is convention
var app = express();

//you would do something like this if you want these 3 routes
//to send back the same response to the client, which in this situation
//is represented by the res.send, and we are sending a string saying 'bonjour to you too'
app.get(['/hello', '/hi', '/hola'], function(req,res){
	res.send('bonjour to you too')
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