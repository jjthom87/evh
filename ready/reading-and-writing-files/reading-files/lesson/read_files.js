//fs and require are built into Node.js
//'fs' is a file system module
//'require' is used to import modules
//here, we are importing the file system module into this file
var fs = require('fs');

//reading the read_from.text file in this directory
fs.readFile('./read_from.txt', 'utf-8', function(err, data){
	if(err){
		throw err;
	}
	//logging the contents of the text file
	console.log("--- Contents of Text File ---")
	console.log(data)
	//splitting the string into an array and then joining everything back with spaces
	console.log(data.split(",").join(" "))

})

//read all files in this directory
fs.readdir('.', function(err, files){
	console.log("--- Files In Directory ---")
	console.log(files)
})
