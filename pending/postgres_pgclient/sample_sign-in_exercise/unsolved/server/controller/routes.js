/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');

//you have to pick the database to connect to;
var dbUrl = {
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: 'testdb',
	host: 'localhost',
	port: 5432
};

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */

var express = require('express');
var path = require('path');

var router = express.Router();

var html_creator = require('../helpers/html_creator.js');

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});


/*
	From the sign in form/post on the client side, set up a post route
		1. Query all the columns for users table where the username equals
		   the username entered in the input
		2. Check to see that the password entered matches the password in the database
			* If it does, then res.json the callback like this res.json({results: callback.rows})
			* If it does not, then res.json({error: 'Incorrect Password'})
*/

/*

	1. If the password entered is correct, then from the client, you are doing window.location.href '/api/profile/:id'
	2. That route will match up the id sent through with the users id in the database
	3. Use the req.params.id to match the id of that user in the database
	4. Send the user information through the html creator
	5. This should redirect to an html page
	6. Dont forget to use:
		res.set('Content-Type', 'text/html');
		res.send(html_creator(queryRes.rows[0]));

*/

module.exports = router;