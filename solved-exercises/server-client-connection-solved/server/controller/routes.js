/* <------------------------------------------------------------------> */

var mysql = require('mysql');
const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);
databaseConnection.connect();

/* <------------------------------------------------------------------> */

var express = require('express');
var path = require('path');

var router = express.Router();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.post('/api/message', (req,res) => {
	console.log(req.body)
	if(req.body.name !== '' && req.body.message !== ''){
		var query = "INSERT INTO guestbook (name, message) VALUES ('"+req.body.name+"', '"+req.body.message+"')";
		databaseConnection.query(query, (error,queryRes) => {
			if(error){
				res.json(error)
			} else {
				res.json(queryRes)
			}
		});
	} else if (req.body.name === '' & req.body.message !== '') {
		var query = "INSERT INTO guestbook (name, message) VALUES ('Guest', '"+req.body.message+"')";
		databaseConnection.query(query, (error,queryRes) => {
			if(error){
				res.json(error)
			} else {
				res.json(queryRes)
			}
		});
	} else if ((req.body.name !== '' && req.body.message === '') || (req.body.name === '' && req.body.message === '')) {
		res.json("null_message")
	}
});

router.get('/api/messages', (req,res) => {
	var query = "SELECT * FROM guestbook";
	databaseConnection.query(query, (error,queryRes) => {
		if(error){
			res.json(error)
		} else {
			res.json(queryRes)
		}
	});
});

router.delete('/api/delete-message/:id', (req,res) => {
	databaseConnection.query('DELETE FROM guestbook WHERE id=' + req.params.id, (err,res) => {
		if(err){
			console.log(err)
		}
	});
});

router.put('/api/update-message/:id', (req,res) => {
	databaseConnection.query('UPDATE guestbook SET message=\''+req.body.message+'\' WHERE id=' + req.params.id, (err,results) => {
		if(err){
			res.json(err)
		}
		res.json({message: "Message Updated"})
	});
});

module.exports = router;
