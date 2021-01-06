var fs = require('fs');
var inquirer = require('inquirer');

inquirer.prompt([
		{
			type: "input",
			message: "What country would you like to receive information on?",
			name: "country"
		}
]).then(function(answers){
		console.log(answers)

		fs.readFile('./countries.json', 'utf-8', function(err, data){
			var countries = JSON.parse(data);
			countries.forEach((country) => {
				if(country.name.toLowerCase() === answers.country.toLowerCase()){
					console.log("Country: " + country.name);
					console.log("Capital: " + country.capital);
					console.log("Region: " + country.region);
					console.log("Population: " + country.population);
				} else {
					throw new Error("Country not Found")
				}
			})
		});
});
