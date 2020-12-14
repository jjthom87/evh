/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');

//you have to pick the database to connect to;
var dbUrl = {
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: 'whatever',
	host: 'localhost',
	port: 5432
};

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */

var express = require('express');
var path = require('path');

var router = express.Router();

var html_creator = require('../helpers/html_creator.js');

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.post('/api/sign-in', (req,res) => {
	var query = `SELECT * FROM users WHERE username='${req.body.username}'`;
	pgClient.query(query, (error,queryRes) => {
		if(req.body.password === queryRes.rows[0].password){
			if(error){
				res.json({error: error})
			} else {
				res.json({results: queryRes.rows[0]})
			}
		} else {
			res.json({error: 'Incorrect Password'})
		}
	});
});

router.get('/api/profile/:id', (req,res) => {
	var userInfo = [];
	var query = `SELECT users.name, profile.fav_movie, profile.fav_song, profile.fav_pizza FROM profile INNER JOIN users ON profile.user_id=users.id WHERE profile.user_id=${req.params.id}`;
	pgClient.query(query, (error,queryRes) => {
		if(error){
			res.json({error: error})
		} else {
			res.set('Content-Type', 'text/html');
			res.set('user_id', req.params.id)
			res.send(html_creator(queryRes.rows[0]));
		}
	});
});

module.exports = router;