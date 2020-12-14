//importing dependencies
var express = require('express');
//path is built into node, so you do not have to do npm install for it
var path = require('path');
var fs = require('fs');

var html_creator = require('../helpers/html_creator.js');

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

router.get('/sa/:animal', (req,res) => {
	fs.readFile(path.join(__dirname, `../objects/${req.params.animal}.json`), 'utf-8', (error, file) => {
		res.set('Content-Type', 'text/html');
		res.send(html_creator(JSON.parse(file)));
	});	
});

//exporting our route for use in another file
module.exports = router;