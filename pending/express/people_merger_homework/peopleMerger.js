//both of these packages are built into node,
//no need to npm i --save
var fs = require('fs');
var path = require('path');

//creating empty array to store items into later
var peopleArr = [];
//research on stack overflow
//readdirSyc will go through all of the files in a directory
fs.readdirSync('.').forEach((name) => {
	//console.log(name)
	//research on stack overflow
	//searches for a specific extension name here i.e. .zip, .js. .txt, tar.gz, etc.
	if(path.extname(name) === ".jsonView"){
		//console.log(name)
		//if an extenstion type is jsonview, then make it to here
		fs.readFile(`./${name}`, 'utf-8', function(err,body){
			//console.log(body)
			var parsed = JSON.parse(body);
			//console.log(parsed)
			for(var i = 0; i < parsed.length; i++){
				//console.log(parsed[i])
				//adding to that array that i created above,
				//as a meaning to create a new similar data set, the two
				//.jsonView 
				peopleArr.push(parsed[i]);
			}
			//research on stack overflow
			//sorting by first name, nice little handy dandy tool to sort
			//try it out yourself ;)
			peopleArr.sort((a,b) => {
				if(a.name < b.name) return -1;
				if(a.name > b.name) return 1;
				return 0;
			})
			//finally writing to the file, stringifying my peopleArr, which in order to be passed
			//needs to be stringify
			//JSON.stringify will make a JSON object able to be passed to another entity efficiently
			fs.writeFile('./peopleComplete.txt', JSON.stringify(peopleArr), function(err){
				console.log("Written To File");
			})
		});
	}
});