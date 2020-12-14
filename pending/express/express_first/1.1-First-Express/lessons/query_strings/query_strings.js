/* How Query Strings Work */

//importing our express dependency to use to create our
//routes for our application
var express = require('express');

//storing the express() function in a variable, this is convention
var app = express();

//when your server is running by doing 'node query_string.js' or 'nodemon query_strings.js' in the terminal
//type in http://localhost:3000/page?name=<your name>&age=<your age>
//whatever your type after page is going to be represent in the request through req.query
//as you can tell, we are sending it back to the client through res.send
app.get("/page", function(req,res){
	//console.log(req.query)
	res.send(req.query)
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