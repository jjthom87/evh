//fs and require are built into Node.js
//'fs' is a file system module
//'require' is used to import modules
//here, we are importing the file system module into this file
var fs = require('fs');

var whatImWritingToFile = "You're the voice try and understand it";

fs.writeFile('./write_to.txt', whatImWritingToFile, function(err){
	if(err) throw err;
	console.log('written to file')
})

var songs = ["Song 2", "Rock Me Gently", "Hooked on a feeling"]

fs.writeFile('./write_to_two.txt', songs, function(err){
	if(err) throw err;
	console.log('written to file')
})
