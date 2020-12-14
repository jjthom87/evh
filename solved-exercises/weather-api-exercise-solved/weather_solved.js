// importing request using 'npm install request'
var request = require('request');
//logging what is entered in the command line
console.log(process.argv)
// getting the city search term from the arguments after 'node weather_solved.js'
// the arguments should be the city that you are getting the weather for
var location = process.argv.slice(2).join('+');

// api key to the weather api
var apiKey = '';
// setting up my weather api url
var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
// adding the location from the command line arguments to the api url

if(location){
	var url = weatherApiUrl + location;

	// making the request to the weather api
	request(url, function(error, response, body) {
		// if no error and the status code is equal to 200
		if (!error && response.statusCode === 200) {
			// then here is the successful response to the weather api
			console.log("this is the unparsed response body from the request to the weather api")
			console.log(body)
			// we're doing JSON.parse(body) to be able to read through the response object
			var weatherResponseBody = JSON.parse(body);
			console.log("this is the PARSED response body from the request to the weather api")
			//logging the parsed response body.
			console.log(weatherResponseBody)
			// logging the temperature which i am getting from the parsed response body of the weather api
			console.log("Temperature: " + weatherResponseBody.main.temp)
			// logging the latitude and longitude which i am getting from the response body of the weather api
			console.log("Latitude: " + weatherResponseBody.coord.lat + ", Longitude: " + weatherResponseBody.coord.lon)
		} else {
			// if an error, then show the error in the console
			console.log(response)
			// parsing out the json response from the api in order to acces the fields from the json object
			var apiResponse = JSON.parse(response.body);
			// creating the custom error response to send to the user
			var customError = "StatusCode: " + apiResponse.cod + " , Status Message: " + apiResponse.message;
			// throwing the error
			throw new Error(customError);
		}
	})
} else {
	// if not location in the argument,
	// then throw an error to the user
	// and let them know to enter a location
	throw new Error("Please enter a location")
}
