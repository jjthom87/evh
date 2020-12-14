var fs = require('fs');

module.exports = (newResult) => {
	//console.log(newResult)
	fs.readFile('./app.txt', 'utf-8', function(err, body){
		if(err) throw err;
		//console.log(body)
		fs.writeFile('./app.txt', body + "\n" + newResult, function(err){
			if(err) throw err;
		})
	})
}