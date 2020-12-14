//importing dependencies
var express = require('express');
//path is built into node, so you do not have to do npm install for it
var path = require('path');

//using a built in express function called router that can store all of our routes
//and be exported for use in another file
var router = express.Router();

//requiring our data object for later use in this file
var grade_object = require('../models/object.js');

//connecting our '/' or our root/host route to an html file on the client side
router.get('/', function(req,res){
	//look up the path.join method on google
	//console.log(req)
	//console.log(dirname)
	res.sendFile(path.join(__dirname, '../../client/html/index.html'));
});

//when an event connected to the '/grade-post' route on the front-end is hit
//it is connected to this route on the back-end. req.body is what was sent over
//from the front end. With res.json, we are sending it right back to the front end
//for use on the client side
router.post('/grade-post', function(req,res){
	//console.log(req)
	//console.log(req.body)
	for(var i = 0; i < grade_object.length; i++){
		if(grade_object[i].name === req.body.name){
			grade_object[i].grade = ((parseFloat(req.body.grade)) + (grade_object[i].grade * grade_object[i].grades))/(grade_object[i].grades + 1)
			grade_object[i].grades++;
		}
	}
	res.json(grade_object)
});

//look for the '/api/get-object' on the front end
//when this route is hit, we are sending our data object over, which is
//signified by res.json(obj)
router.get('/api/get-object', function(req,res){
	//console.log(req)
	res.json(grade_object)
});

//exporting our route for use in another file
module.exports = router;