/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');

//you have to pick the database to connect to;
var dbUrl = {
	user: process.argv.POSTGRES_USER,
	password: process.argv.POSTGRES_PASSWORD,
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

router.post('/api/first-post', (req,res) => {
	console.log(req.body)
	var query = "INSERT INTO users (name, username, password) VALUES ($1,$2,$3)";
	pgClient.query(query, [req.body.name, req.body.username, req.body.password], (error,queryRes) => {
		if(error){
			res.json({error: error})
		} else {
			res.json({results: "successful"})
		}
	});
})

module.exports = router;