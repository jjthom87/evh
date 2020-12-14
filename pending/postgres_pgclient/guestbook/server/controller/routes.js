/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');

//you have to pick the database to connect to;
var dbUrl;

if(process.env.DATABASE_URL){
	dbUrl = process.env.DATABASE_URL
} else {
	dbUrl = {
		user: process.argv.POSTGRES_USER,
		password: process.argv.POSTGRES_PASSWORD,
		database: 'guestbook',
		host: 'localhost',
		port: 5432
	};
}

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

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
		var query = "INSERT INTO guestbook (name, message) VALUES ($1, $2)";
		pgClient.query(query, [req.body.name, req.body.message], (error,queryRes) => {
			if(error){
				res.json(error)
			} else {
				res.json(queryRes)
			}
		});
	} else if (req.body.name === '' & req.body.message !== '') {
		var query = "INSERT INTO guestbook (name, message) VALUES ($1, $2)";
		pgClient.query(query, ["Guest", req.body.message], (error,queryRes) => {
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
	pgClient.query(query, (error,queryRes) => {
		if(error){
			res.json(error)
		} else {
			res.json(queryRes)
		}
	});	
});

router.delete('/api/delete-message/:id', (req,res) => {
	pgClient.query('DELETE FROM guestbook WHERE id=' + req.params.id, (err,res) => {
		if(err){
			console.log(err)
		}
	});
});

router.put('/api/update-message/:id', (req,res) => {
	pgClient.query('UPDATE guestbook SET message=$1 WHERE id=' + req.params.id, [req.body.message], (err,results) => {
		if(err){
			res.json(err)
		}
		res.json({message: "Message Updated"})
	});
});

module.exports = router;