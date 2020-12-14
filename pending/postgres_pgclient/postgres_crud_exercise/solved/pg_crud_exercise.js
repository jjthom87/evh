/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');
var inquirer = require('inquirer');

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

console.log("Create your user");
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
]).then((create_user) => {
	pgClient.query('INSERT INTO users (name, username, password) VALUES ($1, $2, $3)', [create_user.name, create_user.username, create_user.password] , (create_user_err, create_user_result) => {});
	console.log("Create your profile")
	inquirer.prompt([
		{
			type: "input",
			message: "What is your favorite movie?",
			name: "movie"
		},
		{
			type: "input",
			message: "What is your favorite song?",
			name: "song"
		},
		{
			type: "input",
			message: "What is your favorite slice of pizza?",
			name: "pizza"
		}
	]).then((create_profile) => {
		pgClient.query("SELECT id FROM users WHERE username='" + create_user.username + "'", (selectUserErr, selectUserRes) => {
			pgClient.query('INSERT INTO profile (fav_movie, fav_song, fav_pizza, user_id) VALUES ($1, $2, $3, $4)', [create_profile.movie, create_profile.song, create_profile.pizza, selectUserRes.rows[0].id] , (create_user_err, create_user_result) => {});
		});
		inquirer.prompt([
			{
				type: "list",
				message: "Which field would you like to update?",
				choices: ["Favorite Movie", "Favorite Song", "Favorite Slice of Pizza"],
				name: "field_update_choice"
			},
			{
				type: "input",
				message: "What is the new value?",
				name: "update_value"
			}
		]).then((update_profile) => {
			var field;
			switch(update_profile.field_update_choice){
				case 'Favorite Movie':
					field = "fav_movie";
					break;
				case 'Favorite Song':
					field = "fav_song";
					break;
				case 'Favorite Slice of Pizza':
					field = "fav_pizza";
					break;
			}
			pgClient.query("SELECT id FROM users WHERE username='" + create_user.username + "'", (selectUserErrTwo, selectUserResTwo) => {
				pgClient.query('UPDATE profile SET ' + field + '=$1 WHERE user_id=' + selectUserResTwo.rows[0].id, [update_profile.update_value] , (update_profile_err, update_profile_result) => {});
			});
			inquirer.prompt([
				{
					type: "input",
					message: "Which user id would you like to delete?",
					name: "update_value"
				}
			]).then((delete_profile) => {	
				pgClient.query("SELECT id FROM users WHERE username='" + create_user.username + "'", (selectUserErrThree, selectUserResThree) => {
					pgClient.query('DELETE FROM profile WHERE user_id=' + selectUserResThree.rows[0].id, (delete_profile_err, delete_profile_result) => {});
					pgClient.query('DELETE FROM users WHERE id=' + selectUserResThree.rows[0].id, (delete_profile_err, delete_profile_result) => {
						pgClient.end();
					});
				});
			});	
		});		
	});
});



