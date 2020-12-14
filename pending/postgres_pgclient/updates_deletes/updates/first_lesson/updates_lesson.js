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

pgClient.query("UPDATE users SET name=$1 where name=$2", ['Johnny','Joel'], function(err, result){
	if(err) console.log(err)
});

pgClient.query("UPDATE profile SET fav_song=$1 where id=1", ['You cant hurry love'], function(err, result){
	if(err) console.log(err)
});





