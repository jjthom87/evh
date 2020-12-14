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

console.log("Welcome to YooZoo Blogging")

var runApp = () => {
	inquirer.prompt([
		{
			type: "list",
			message: "Sign Up/Sign In",
			choices: ["Sign Up", "Sign In"],
			name: "sign_choice"
		}
	]).then(function(sign){
		if(sign.sign_choice === "Sign Up"){
			console.log("Welcome to the yoozoo sign up page");
			inquirer.prompt([
				{
					type: "input",
					message: "What is your name?",
					name: "name"
				},
				{
					type: "input",
					message: "What is your username?",
					name: "username"
				},
				{
					type: "password",
					message: "What is your password?",
					name: "password"
				}
			]).then(function(signup){
				pgClient.query('INSERT INTO users (name, username, password) VALUES ($1, $2, $3)', [signup.name, signup.username, signup.password] , (err, result) => {
					console.log("Thank you for signing up. Please sign in now");
					runApp();
				});
			});
		} else {
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
				pgClient.query(`SELECT * FROM users WHERE username='${res.username}'`, (err, result) => {
					if(result.rows.length > 0){
					    if(result.rows[0].password === res.password){
					    	console.log("Welcome to YooZoo " + result.rows[0].name);
					    	pgClient.query(`SELECT * FROM profile WHERE user_id=${result.rows[0].id}`, (errTwo, resTwo) => {
					    		if(resTwo.rows.length > 0){
							    	console.log(result.rows[0].name + ", Here is your profile info");
									pgClient.query('SELECT * FROM profile WHERE user_id=' + result.rows[0].id, (error, resThree) => {
										console.log("Favorite Movie: " + resThree.rows[0].fav_movie);
										console.log("Favorite Song: " + resThree.rows[0].fav_song);
										console.log("Favorite Pizza Slice: " + resThree.rows[0].fav_pizza);
										pgClient.end();
									});
					    		} else {
					    			console.log("You need to create a profile " + result.rows[0].name);
									inquirer.prompt([
										{
											type: "input",
											message: "What is your favorite movie?",
											name: "movie",
										},
										{
											type: "input",
											message: "What is your favorite song?",
											name: "song",
										},
										{
											type: "input",
											message: "What is your favorite slice of pizza?",
											name: "pizza",
										}		
									]).then((profile) => {
										pgClient.query('INSERT INTO profile (fav_movie, fav_song, fav_pizza, user_id) VALUES ($1, $2, $3, $4)', [profile.movie, profile.song, profile.pizza, result.rows[0].id], (errThree, proResult) => {
											if(errThree){
												console.log(errThree);
											}
											console.log("Your Profile has been created");
											pgClient.end();
										});
									});
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
		}
	})
}

runApp();





