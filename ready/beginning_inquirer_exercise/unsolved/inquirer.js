/* 

Create a basic command line Node application using the inquirer package.
Your application should ask the user any five questions of your choosing. 
The question set should include at least one:

- Basic input, 
- Password, 
- List, 
- Checkbox, 
- and Confirm

Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
See the inquirer GitHub documentation "examples" page if you need help.

Remember to be creative!

*/

var inquirer = require('inquirer');

inquirer.prompt([
	{
		type: 'input',
		message: 'Type your favorite hockey team',
		name: 'hockey'	
	},
	{
		type: 'password',
		message: 'Select your password',
		name: 'password'
	},
	{
		type: 'list',
		message: 'Select one, which is your favorite stadium food',
		choices: ['hot dog', 'nachos', 'ice cream', 'pretzel'],
		name: 'foods'
	},
	{
		type: 'checkbox',
		message: 'Select all that apply, which of these activities were you involved in in High School',
		choices: ['soccer', 'baseball', 'track', 'football', 'theater', 'dance'],
		name: 'activities'
	},
	{
		type: 'confirm',
		message: 'Confirm these answers are correct',
		name: 'confirm',
		default: true
	}
]).then(function(response){
	var password = "fall2017";
	if(response.password === password){
		console.log(response.password + " is the correct password")
	} else {
		console.log("Password is wrong, please try again")
	}
})
