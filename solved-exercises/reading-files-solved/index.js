/*

1. Create a .txt file in this directory. Use the terminal to create the text file .
2. Using process.argv, check to see if the 2nd argument you're using is in the text file
3. If there are any arguments after the 2nd argument, dont run the logic
4. when checking if the text is in the data file, you can set the text to lowercase for the logic
   i.e. if the file reads 'bad', and you input 'Bad', the logic should state that the text is in the file

*/

var fs = require('fs');
var argument = process.argv[2];

if(process.argv.length == 3){
  fs.readFile('./read.txt', 'utf-8', function(err, data){
  	if(err){
  		throw err;
  	}

    if(data.indexOf(argument.toLowerCase()) > -1){
      console.log("text is in file")
    } else {
      console.log("text is not in file")
    }
  })
} else {
  console.log("Too many arguments")
}
