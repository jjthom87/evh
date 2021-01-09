var fs = require('fs');

module.exports = (newResult) => {
	var fileNameAndPath = './app.txt';
	//console.log(newResult)
	if(fs.existsSync(fileNameAndPath)){
		fs.readFile(fileNameAndPath, 'utf-8', function(err, body){
			if(err) throw err;
			//console.log(body)
			fs.writeFile(fileNameAndPath, body + "\n" + newResult, function(err){
				if(err) throw err;
			})
		})
	} else {
		fs.writeFile(fileNameAndPath, newResult, function(err){
			if(err) throw err;
		})
	}
}
