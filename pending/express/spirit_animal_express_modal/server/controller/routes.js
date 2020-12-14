//importing dependencies
var express = require('express');
//path is built into node, so you do not have to do npm install for it
var path = require('path');
var fs = require('fs');

var importFunc = require('../helpers/calculate.js');

//using a built in express function called router that can store all of our routes
//and be exported for use in another file
var router = express.Router();

//connecting our '/' or our root/host route to an html file on the client side
router.get('/', (req,res) => {
	//look up the path.join method on google
	//console.log(req)
	//console.log(dirname)
	res.sendFile(path.join(__dirname, '../../client/html/index.html'));
});

router.post('/quiz-results', (req,res) => {
	var result = importFunc(parseInt(req.body.results))
	fs.readFile(path.join(__dirname, `../objects/${result}.json`), 'utf-8', (error, file) => {
		res.json(file);
	});
});

//exporting our route for use in another file
module.exports = router;