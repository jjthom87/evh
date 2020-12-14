//importing dependencies
var express = require('express');
//path is built into node, so you do not have to do npm install for it
var path = require('path');

//using a built in express function called router that can store all of our routes
//and be exported for use in another file
var router = express.Router();

//requiring our data object for later use in this file
var obj = require('../models/object.js');

//connecting our '/' or our root/host route to an html file on the client side
router.get('/', function(req,res){
	//look up the path.join method on google
	//console.log(req)
	//console.log(dirname)
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

//when an event connected to the '/second-post' route on the front-end is hit
//it is connected to this route on the back-end. req.body is what was sent over
//from the front end. With res.json, we are sending it right back to the front end
//for use on the client side
router.post('/second-post', function(req,res){
	//console.log(req)
	//console.log(req.body)
	res.json(req.body)
});

//look for the '/getRoute' on the front end
//when this route is hit, we are sending our data object over, which is
//signified by res.json(obj)
router.get('/getRoute', function(req,res){
	//console.log(req)
	res.json(obj)
});

//exporting our route for use in another file
module.exports = router;