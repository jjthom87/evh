//json object JSON.parse
var fs = require('fs');

fs.readFile('./office.json', 'utf-8', function(err, data){
	//https://www.w3schools.com/js/js_json_parse.asp
	//needed in order to appropriately read through data in a json file
	var officeQuotes = JSON.parse(data);

	//looping through my office quotes array
	console.log("----- For Each -----")
	officeQuotes.forEach((officeQuote) => {
		console.log(officeQuote)
	});

	//returning a new array of just the office quotees
	var officeQuotees = officeQuotes.map((officeQuote) => {
		return officeQuote.quotee;
	});
	console.log("----- Map -----")
	console.log(officeQuotees);

	//removing duplicates in the officeQuotees array
	//a 'Set' will remove duplicate values in an array
	var removeDuplicates = [...new Set(officeQuotees)];
	console.log("----- Set -----")
	console.log(removeDuplicates)

});

// Reading another json object
fs.readFile('./jared.json', 'utf-8', function(err, data){
	//https://www.w3schools.com/js/js_json_parse.asp
	//needed in order to appropriately read through data in a json file
	var jaredInfo = JSON.parse(data);
	console.log("----- Object Info -----")
	console.log(jaredInfo);

	//get the favroiteMovies array from the json object
	var jaredsFavoriteMovies = jaredInfo.favoriteMovies;

	//looping through the movies array and logging the contents
	console.log("--- My Favorite Movies ---")
	jaredsFavoriteMovies.forEach((movie) => {
		console.log(movie)
	})
});
