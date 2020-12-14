var express = require('express');
var path = require('path');

var router = express.Router();

var grade_object = require('../models/object.js');

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/html/index.html'));
});

/*
	1. make a post route called '/grade-post'
	2. this is going to take the body of '/grade-post' form on the client side
	3. don't forget to console.log(req.body)
	4. Write a conditional that:
		* Compares the req.body.name (name of the student in the dropdown) to name in the grade object created on the server side
		* changes the current averaged grade to the new averaged grade...i.e, jared has 2 grades, he's selected in the dropdown
		  with a grade, grades get incremented by 1 and grade gets changed to the average
		* Send over the mutated object as json the client
*/

/* < ------------------------------------------------------------------------ > */

/* 
	make a get route called '/api/get-object' that merely sends the grade_object as json to the client
*/



module.exports = router;