const inquirer = require('inquirer');
//setup for connection database
const mysql = require('mysql');

//creating the connection to the database
const databaseConnection = mysql.createConnection("mysql://root:@localhost:3306/itunes");

//officially connecting to the mysql database
databaseConnection.connect();

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
					databaseConnection.query('INSERT INTO users (name, username, password) VALUES (\''+signup.name+'\', \''+signup.username+'\', \''+signup.password+'\')', function(signUpErr, signUpResult) {
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
				databaseConnection.query(`SELECT * FROM users WHERE username='${res.username}'`, function(err, result) {
					if(result.length > 0){
					    if(result[0].password === res.password){
					    	databaseConnection.query(`SELECT * FROM bank WHERE user_id=${result[0].id}`, function(errTwo, resTwo){
					    		if(errTwo){
					    			console.log(errTwo)
					    		} else {
					    			if(resTwo.length == 0){
					    				databaseConnection.query('INSERT INTO bank (user_id) VALUES ('+result[0].id+')', function(errThree, resThree){
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
										message: "Rock On " + result[0].name,
										choices: ["View Your Music", "Buy Music", "View Your Balance", "Sign Out"],
										name: "sign_in_choice"
									}
								]).then(function(signed_in){
									if(signed_in.sign_in_choice === "Buy Music"){
										databaseConnection.query("Select balance FROM bank where user_id=" + result[0].id, (errEight, resEight) => {
											if(parseInt(resEight[0].balance) > 0){
												var allIds = [];
												var boughtIds = [];
												databaseConnection.query("SELECT songs.id FROM songs INNER JOIN bought_songs ON bought_songs.song_id=songs.id WHERE bought_songs.user_id=" + result[0].id, function(songErr, songRes){
													for(var i = 0;  i < songRes.length; i++){
														boughtIds.push(songRes[i].id);
													}
													databaseConnection.query("SELECT * FROM songs", function(songTwoErr, songTwoRes){
														for(var j = 0; j < songTwoRes.length; j++){
															allIds.push(songTwoRes[j].id);
														}
														//stack overflow
														allIds = allIds.filter(val => !boughtIds.includes(val));
														databaseConnection.query("SELECT * FROM songs WHERE id in (" + allIds.join(",") + ")", function(songThreeErr, songThreeRes){
															var songs = [];
															for(var i = 0; i < songThreeRes.length; i++){
																songs.push((i + 1) + ". " + songThreeRes[i].song_artist + ": " + songThreeRes[i].song_name + ", Price: $" + songThreeRes[i].price);
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
																	databaseConnection.query("SELECT id FROM songs WHERE song_artist='" + songs.song_choice.split(":")[0].split(".")[1].trim() + "'", function(songErr, songRes){
																		if(songErr) throw songErr;
																		databaseConnection.query('INSERT INTO bought_songs (user_id, song_id) VALUES ('+result[0].id+', '+songRes[0].id+')', function(errFive, resFive){
																			console.log("Song Bought");
																		});
																		databaseConnection.query('UPDATE bank SET balance='+(parseInt(resEight[0].balance) - parseInt(songs.song_choice.split('$')[1]))+' WHERE user_id=' + result[0].id, (errSeven, resSeven) => {
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
														databaseConnection.query("UPDATE bank SET balance="+parseInt(bank_add_res.bank_add)+" WHERE user_id=" + result[0].id, (errNine, resNine) => {
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
										databaseConnection.query('SELECT * FROM songs INNER JOIN bought_songs ON bought_songs.song_id=songs.id WHERE bought_songs.user_id=' + result[0].id, (errSix, resSix) => {
											for(var i = 0; i < resSix.length; i++){
												var obj = resSix[i];
												console.log((i + 1) + ". " + obj.song_artist + ": " + obj.song_name);
											}
											alreadySignedIn();
										});
									} else if (signed_in.sign_in_choice === "View Your Balance") {
										databaseConnection.query('SELECT balance FROM bank WHERE user_id=' + result[0].id, (bankErr, bankRes) => {
											console.log("Current Balance: " + bankRes[0].balance);
											alreadySignedIn();
										});
									} else {
										console.log("Later " + result[0].name);
										databaseConnection.end();
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
