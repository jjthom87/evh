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

console.log("Welcome to UR Product Manager");
inquirer.prompt([
	{
		type: "input",
		message: "What is your username?",
		name: "username",
	},
	{
		type: "password",
		message: "What is your password?",
		name: "password",
	}
]).then((res) => {
	pgClient.query(`SELECT * FROM users WHERE username='${res.username}'`, function(err, result) {
		if(err){
			console.log(err)
		}
		console.log(result)
		if(result.rows.length > 0){
		    if(result.rows[0].password === res.password){
		    	console.log("Welcome " + result.rows[0].name + ". Here are the products that you have bought.")
				pgClient.query('SELECT products.product FROM products INNER JOIN bought_products ON bought_products.product_id=products.id WHERE bought_products.user_id=' + result.rows[0].id, (error,queryResTwo) => {
					if(error){
						console.log(error)
					}
					console.log(queryResTwo)
					if(queryResTwo.rows.length > 0){
						for(var i = 0; i < queryResTwo.rows.length; i++){
							console.log((i + 1) + ". " + queryResTwo.rows[i].product)
						}
						pgClient.end();
					} else {
						console.log("You haven't bought anything");
						pgClient.end();
					}
				});
		    } else {
		    	console.log("Incorrect Password");
		    	pgClient.end();
		    }
		} else {
			console.log("Username doesn't exist");
			pgClient.end();
		}
	});
});