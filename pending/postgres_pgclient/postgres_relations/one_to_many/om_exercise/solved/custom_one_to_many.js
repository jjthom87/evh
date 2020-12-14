/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');
var inquirer = require('inquirer');

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

console.log("Welcome to YooZoo Blogging")
inquirer.prompt([
	{
		type: "input",
		message: "What is your username?",
		name: "username",
	}
]).then((res) => {
	pgClient.query(`SELECT * FROM users WHERE username='${res.username}'`, function(err, result) {
		if(result.rows.length > 0){
	    	console.log("Welcome " + result.rows[0].name + ". Here are your blog post(s)")
			pgClient.query('SELECT * FROM blog_post WHERE user_id=' + result.rows[0].id, (error,queryResTwo) => {
				if(queryResTwo.rows.length > 0){
					for(var i = 0; i < queryResTwo.rows.length; i++){
						console.log((i + 1) + ". " + queryResTwo.rows[i].post)
					}
					pgClient.end();
				} else {
					console.log("You have no blog posts");
					pgClient.end();
				}
			});
		} else {
			console.log("Username doesn't exist");
			pgClient.end();
		}
	});
});