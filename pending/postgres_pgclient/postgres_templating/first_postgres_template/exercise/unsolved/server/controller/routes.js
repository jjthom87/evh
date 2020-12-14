/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');

//you have to pick the database to connect to;
var dbUrl = {
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: 'whatever',
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

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

/*

	Create the get route to send id & product columns from the products table
	be sure to res.json the rows to the client

*/


/*

	Create the get route to send the description column from the products table
	be sure to res.json the rows to the client.

	Use an :id parameter here...look at your client side as well
	compare the sent by the client to the product's id in the table, so it only sends
	the description of that id

*/

module.exports = router;