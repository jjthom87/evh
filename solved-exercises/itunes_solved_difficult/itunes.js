const inquirer = require('inquirer');

const databaseConnection = require('./database_connection.js');
//officially connecting to the mysql database
databaseConnection.connect();

const userIsSignedIn = require('./user_is_signed_in.js');
const signUp = require('./sign_up.js');
const signIn = require('./sign_in.js');

console.log("Welcome to iTunes");
const runApp = () => {
	inquirer.prompt([
		{
			type: "list",
			message: "Sign Up/Sign In",
			choices: ["Sign Up", "Sign In"],
			name: "sign_choice"
		}
	]).then(function(sign){
		if(sign.sign_choice === "Sign Up"){
			signUp(runApp);
		} else {
			signIn(runApp, userIsSignedIn)
		};
	});
};
runApp();
