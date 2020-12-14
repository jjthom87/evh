//json object JSON.parse
var fs = require('fs');
//importing inquirer into our page by using the command 'npm install inquirer --save'
var inquirer = require('inquirer');
//calling the inquirer prompt function and setting what we would like to prompt
inquirer.prompt([
		{
			type: "list",
			message: "Which movie would you like information on?",
			choices: ["12 Angry Men", "Baby's Day Out", "Back to the Future", "Beverly Hills Cop", "Big", "Boyz n the Hood", "Blade Runner", "The Blues Brothers", "Commando", "Casino", "Fatal Attraction", "Jumanji", "The Shawshank Redemption"],
			name: "movie"
		}
	]).then(function(answers){
		console.log("Input from the Inquirer options ")
		console.log(answers)

		fs.readFile('./movies.json', 'utf-8', function(err, data){
			var movies = JSON.parse(data);
			console.log("Parsed Movies Data")
			console.log(movies)

			movies.forEach((movie) => {
				if(movie.Title == answers.movie){
					console.log("Logging the movie that passes the logic")
					console.log(movie)
				}
			});

		});
});
