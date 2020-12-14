var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/html/profile.html'));
});

router.get('/blog', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/html/blog.html'));
});

var postObj = [];
router.post('/api/post-blog', (req,res) => {
	postObj.push(req.body);
	res.json({})
});

router.get('/api/get-posts', function(req,res){
	res.json(postObj)
});

module.exports = router;