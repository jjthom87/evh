// run npm install in order to install all of the packages that are listed in the package.json

// importing the 'request' module
var request = require('request');

//key in order to gain access to the api
var apiKey = "";
//logging what is entered in the command line
console.log(proces.argv)
//getting the search term from the terminal command that you ran
//by getting everything from the 2nd argument and on (everything after node giphy.js)
var giphySearchTermForUrl = process.argv.slice(2).join('+');
//number of results went from the api response
var numberOfResults = "1";
//api url with inputs from above
var giphyApiUrl = "http://api.giphy.com/v1/gifs/search?q=" + giphySearchTermForUrl + "&api_key=" + apiKey + "&limit=" + numberOfResults;

if(giphySearchTermForUrl){
	var url = giphyApiUrl + giphySearchTermForUrl;

	// making the request to the giphy api
	request(url, function(error, response, body) {
		// logging the response from the giphy api call
		console.log("this is the response object that we get when calling the giphy api")
		console.log(response)
		// if no error and the status code is equal to 200
		// here, were are accessing the statusCode value from the response object
		if (!error && response.statusCode === 200) {
			// then here is the successful response to the giphy api, but you see it's a weird string because its unparsed
			console.log("unparsed body from the giphy api")
			console.log(body);
			console.log("parsed body from the giphy api")
			// JSON.parse is used to be able to have your logic be able to read the properties and values from the object
			// without JSON.parse here, you would have a difficult time reading through the response object
			console.log(JSON.parse(body))
		} else {
			// if an error, then show the error in the console
			console.log(response)
			// here is the parsed joke response from the joke rapid api
			// JSON.parse is used to be able to easily access fields from a response object or any json object
			// in this case, the object comes in as a string from the rapid api, so ...
			// ... JSON.parse(res.body) will turn that string into an object that we are able to easily parse through
			console.log("parsed response body")
			var apiResponse = JSON.parse(response.body);
			// creating the custom error response to send to the user
			var customError = "StatusCode: " + response.statusCode + ", Status Message: " + apiResponse.message;
			// throwing the error
			throw new Error(customError);
		}
	})
} else {
	// if no giphySearchTermForUrl in the argument,
	// then throw an error to the user
	// and let them know to enter a location
	throw new Error("Please enter a search term")
}
