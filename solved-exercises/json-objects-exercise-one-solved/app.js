var fs = require('fs');
var input = process.argv[2];

fs.readFile('./countries.json', 'utf-8', function(err, data){
	var countries = JSON.parse(data);
	countries.forEach((country) => {
		if(country.name.toLowerCase() === input.toLowerCase()){
			console.log("Country: " + country.name);
			console.log("Capital: " + country.capital);
			console.log("Region: " + country.region);
			console.log("Population: " + country.population);
		} else {
			throw new Error("Country not Found")
		}
	})
});
