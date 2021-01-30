var pg = require('pg');
var inquirer = require('inquirer');

var dbUrl = {
	user: process.argv.POSTGRES_USER,
	password: process.argv.POSTGRES_PASSWORD,
	database: 'itunes',
	host: 'localhost',
	port: 5432
};

var pgClient = new pg.Client(dbUrl);
pgClient.connect();

console.log("iTunes");
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
			const signUp = () => {
				console.log("Welcome to the iTunes sign up page");
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
					pgClient.query('INSERT INTO users (name, username, password) VALUES ($1, $2, $3)', [signup.name, signup.username, signup.password] , (signUpErr, signUpResult) => {
						if(signUpErr){
							if(signUpErr.toString().indexOf('duplicate key value violates unique constraint "users_username_key"') > -1){
								console.log("Username already taken, please re-enter");
								signUp();
							} else {
								console.log("Error: " + signUpErr);
								signUp();
							}
						} else {
							console.log("Thank you for signing up. Please sign in now");
							runApp();
						}
					});
				});
			}
			signUp();
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
				pgClient.query(`SELECT * FROM users WHERE username='${res.username}'`, function(err, result) {
					if(result.rows.length > 0){
					    if(result.rows[0].password === res.password){
					    	pgClient.query(`SELECT * FROM bank WHERE user_id=${result.rows[0].id}`, function(errTwo, resTwo){
					    		if(errTwo){
					    			console.log(errTwo)
					    		} else {
					    			if(resTwo.rows.length == 0){
					    				pgClient.query('INSERT INTO bank (user_id) VALUES ($1)', [result.rows[0].id], function(errThree, resThree){
					    					if(errThree){
					    						console.log(errThree);
					    					}
					    				})
					    			}
					    		}
					    	});
					    	function alreadySignedIn(){
								inquirer.prompt([
									{
										type: "list",
										message: "Rock On " + result.rows[0].name,
										choices: ["View Your Music", "Buy Music", "View Your Balance", "Sign Out"],
										name: "sign_in_choice"
									}
								]).then(function(signed_in){
									if(signed_in.sign_in_choice === "Buy Music"){
										pgClient.query("Select balance FROM bank where user_id=" + result.rows[0].id, (errEight, resEight) => {
											if(parseInt(resEight.rows[0].balance) > 0){
												var allIds = [];
												var boughtIds = [];
												pgClient.query("SELECT songs.id FROM songs INNER JOIN bought_songs ON bought_songs.song_id=songs.id WHERE bought_songs.user_id=" + result.rows[0].id, function(songErr, songRes){
													for(var i = 0;  i < songRes.rows.length; i++){
														boughtIds.push(songRes.rows[i].id);
													}
													pgClient.query("SELECT * FROM songs", function(songTwoErr, songTwoRes){
														for(var j = 0; j < songTwoRes.rows.length; j++){
															allIds.push(songTwoRes.rows[j].id);
														}
														//stack overflow
														allIds = allIds.filter(val => !boughtIds.includes(val));
														pgClient.query("SELECT * FROM songs WHERE id in (" + allIds.join(",") + ")", function(songThreeErr, songThreeRes){
															var songs = [];
															for(var i = 0; i < songThreeRes.rows.length; i++){
																songs.push((i + 1) + ". " + songThreeRes.rows[i].song_artist + ": " + songThreeRes.rows[i].song_name + ", Price: $" + songThreeRes.rows[i].price);
															}
															songs.push("Go Back")
															inquirer.prompt([
																{
																	type: "list",
																	message: "Pick a song to buy",
																	choices: songs,
																	name: "song_choice"
																}
															]).then(function(songs){
																if(songs.song_choice === "Go Back"){
																	alreadySignedIn();
																} else {
																	pgClient.query("SELECT id FROM songs WHERE song_artist='" + songs.song_choice.split(":")[0].split(".")[1].trim() + "'", function(songErr, songRes){
																		if(songErr) throw songErr;
																		pgClient.query('INSERT INTO bought_songs (user_id, song_id) VALUES ($1,$2)', [result.rows[0].id, songRes.rows[0].id], function(errFive, resFive){
																			console.log("Song Bought");
																		});
																		pgClient.query('UPDATE bank SET balance=$1 WHERE user_id=' + result.rows[0].id, [(parseInt(resEight.rows[0].balance) - parseInt(songs.song_choice.split('$')[1]))], (errSeven, resSeven) => {
																			console.log("Account Updated");
																			alreadySignedIn();
																		});
																	});
																}
															});
														})
													})
												});
											} else {
												inquirer.prompt([
													{
														type: "input",
														message: "You currently have 0 balance. Please enter how much you would like to add to your account",
														name: "bank_add"
													}
												]).then((bank_add_res) => {
													if(parseInt(bank_add_res.bank_add) > 2){
														pgClient.query("UPDATE bank SET balance=$1 WHERE user_id=" + result.rows[0].id, [parseInt(bank_add_res.bank_add)], (errNine, resNine) => {
															if(errNine){
																console.log(errNine);
															}
															console.log("$" + bank_add_res.bank_add + " added");
															alreadySignedIn();
														})
													} else {
														console.log("Please enter amount more than $2");
														alreadySignedIn();
													}
												});
											}
										});
									} else if (signed_in.sign_in_choice === "View Your Music") {
										pgClient.query('SELECT * FROM songs INNER JOIN bought_songs ON bought_songs.song_id=songs.id WHERE bought_songs.user_id=' + result.rows[0].id, (errSix, resSix) => {
											for(var i = 0; i < resSix.rows.length; i++){
												var obj = resSix.rows[i];
												console.log((i + 1) + ". " + obj.song_artist + ": " + obj.song_name);
											}
											alreadySignedIn();
										});
									} else if (signed_in.sign_in_choice === "View Your Balance") {
										pgClient.query('SELECT balance FROM bank WHERE user_id=' + result.rows[0].id, (bankErr, bankRes) => {
											console.log("Current Balance: " + bankRes.rows[0].balance);
											alreadySignedIn();
										});
									} else {
										console.log("Later " + result.rows[0].name);
										pgClient.end();
									}
								});
							}
							alreadySignedIn();
					    } else {
					    	console.log("Incorrect Password");
					    	runApp();
					    }
					} else {
						console.log("Username doesn't exist");
						runApp();
					}
				});
			});
		};
	});
};
runApp();