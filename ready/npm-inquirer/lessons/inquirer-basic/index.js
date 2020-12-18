//importing inquirer into our page by using the command 'npm install inquirer --save'
var inquirer = require('inquirer');

// running the inquirer prompt command
inquirer.prompt([
		// Here we create a basic text prompt.
		{
			type: "input",
			message: "What is your name?",
			name: "name"
		},

		// Here we create a basic password-protected text prompt.
		{
			type: "password",
			message: "Set your password",
			name: "password"
		},

		// Here we give the user a list to choose from.
		{
			type: "list",
			message: "Which Pokemon do you choose?",
			choices: ["Bulbasaur", "Squirtle", "Charmander"],
			name: "pokemon"
		},

		// Here we ask the user to confirm.
		{
			type: "confirm",
			message: "Are you sure:",
			name: "confirm",
			default: true

		},
		//here is a checkbox where you can make multiple choices
		{
			type: "checkbox",
			message: "Which foods do you like?",
			choices: ["pizza", "burger", "broccoli", "carrots", "brussel sprouts"],
			name: "foods"
		}
	]).then(function(answers){
		console.log(answers)
});
