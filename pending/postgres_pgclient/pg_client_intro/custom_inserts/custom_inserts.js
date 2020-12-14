/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');

//you have to pick the database to connect to;
var dbUrl = {
	user: 'jaredthomas',
	password: '',
	database: 'first_db',
	host: 'localhost',
	port: 5432
};

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */

var table = process.argv[2];
var field = process.argv[3];
var value = process.argv.slice(4);

pgClient.query('INSERT INTO ' + table + ' (' + field + ') VALUES ($1)', [value.join(" ")] , function(err, result) {
	if(err) throw err;
	console.log("Insert Successful");
	//closing after the query is made, stop the database server until it is needed again
	pgClient.end();
});