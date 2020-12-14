/* 

Create a basic command line Node application using the inquirer package.
Your application should ask the user any five questions of your choosing. 
The question set should include at least one:

- Basic input 
- Password
- List
- Checkbox 
- Confirm

If a user's password matches a pre-defined password, re-display the data back to the user with some text. 

Remember to be creative!

*/

var pass = "hello"

var inquirer = require('inquirer');

inquirer.prompt([
		{
			type: "input",
			message: "What is your name?",
			name: "name"
		},
		{
			type: "password",
			message: "Set your password",
			name: "password"
		},
		{
			type: "list",
			message: "Which Pokemon do you choose?",
			choices: ["Bulbasaur", "Squirtle", "Charmander"],
			name: "pokemon"
		},
		{
			type: "confirm",
			message: "Are you sure:",
			name: "confirm",
			default: true

		},
		{
			type: "checkbox",
			message: "Which foods do you like?",
			choices: ["pizza", "burger", "broccoli", "carrots", "brussel sprouts"],
			name: "foods"
		}
	]).then(function(answers){
		if(answers.password === pass){
			console.log(answers.password + " is the correct password");
		} else {
			console.log("password incorrect");
		}
});