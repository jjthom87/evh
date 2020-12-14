var request = require('request');
var inquirer = require('inquirer');

var apiKey = '275d5dfdea53a2d3e3869f48d154e9ac';
var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

inquirer.prompt([
		{
			type: "input",
			message: "What location would you like to see weather of?",
			name: "location"
		},
	]).then(function(answer){
		var loc = answer.location.split(" ").join("+");
		request(`${weatherApiUrl}${loc}`, function(error, response, body) {
			if (!error && response.statusCode === 200) {
				var results = JSON.parse(body);
				console.log("Description: " + results.weather[0].description)
				console.log("Temperature: " + results.main.temp);
				console.log("Wind Speed: " + results.wind.speed + "mph")
			}
		})
});