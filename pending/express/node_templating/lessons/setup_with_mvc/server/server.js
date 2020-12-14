//requiring express, which we installed from npm
var express = require('express');

//importing routes that you exported from routes.js
var routes = require('./controller/routes.js');

//express
var app = express();

//this is a basic use of middleware to be able
//to read all of the routes that you exported from routes.js
app.use('/', routes);

//this is setting the path of all of static/client side/front end files
//which are your js(jquery), html, & css
app.use(express.static('./client'));

//you use this kind of route when pushing to heroku
var PORT = process.env.PORT || 8000;

app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT);
});

//remember, look at your package.json, and run your application
//using "npm start", make sure your directory for your start path is your file
//with app.listen on it:
//as you can tell here, within scripts, the start command, does as it would do
//when you type it in your terminal: "nodemon ./server/server.js"
/*

{
  "name": "first_client_server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "nodemon ./server/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.2",
    "express": "^4.16.2"
  }
}

*/