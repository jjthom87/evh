/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');
var inquirer = require('inquirer');

//you have to pick the database to connect to;
var dbUrl = {
	user: 'jaredthomas',
	password: '',
	database: 'whatever',
	host: 'localhost',
	port: 5432
};

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */

console.log("Welcome to YooZoo")
inquirer.prompt([
	{
		type: "input",
		message: "What is your username?",
		name: "username",
	}
]).then((res) => {
	pgClient.query(`SELECT * FROM users WHERE username='${res.username}'`, (err, result) => {
		if(result.rows.length > 0){
	    	console.log("Welcome to YooZoo " + result.rows[0].name + ". Here is your profile info");
			pgClient.query('SELECT * FROM profile WHERE user_id=' + result.rows[0].id, (error,queryResTwo) => {
				if(queryResTwo.rows.length > 0){
					console.log("Favorite Movie: " + queryResTwo.rows[0].fav_movie);
					console.log("Favorite Song: " + queryResTwo.rows[0].fav_song);
					console.log("Favorite Pizza Slice: " + queryResTwo.rows[0].fav_pizza);
					pgClient.end();
				} else {
					console.log(result.rows[0].name + ", Please create a profile");
					pgClient.end();
				}
			});
		} else {
			console.log("Username doesn't exist");
			pgClient.end();
		}
	});
});