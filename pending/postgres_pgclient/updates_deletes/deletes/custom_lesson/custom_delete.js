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

var table = process.argv[2];
var removing_field = process.argv[3]
var removing_value = process.argv[4]

pgClient.query("DELETE FROM " + table + " WHERE " + removing_field + "='" + removing_value + "'", (err, result) => {
	if(err) console.log(err);
	pgClient.end();
});