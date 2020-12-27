/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');

//you have to pick the database to connect to;
var dbUrl = {
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: 'itunes',
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

var html_creator = require('../helpers/html_creator.js')
var router = express.Router();

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.get('/api/songs', (req,res) => {
	var query = `SELECT * FROM songs`;
	pgClient.query(query, (error,queryRes) => {
		if(error){
			res.json({error: error})
		} else {
			res.json({songs: queryRes.rows})
		}
	});
});

router.get('/api/song-lyrics/:song_name', function(req,res){
	var songName = req.params.song_name.split("+").join(" ");
	pgClient.query('SELECT * FROM songs', function(songErr, songRes){
		var selectedSong = [];
		for(var i = 0; i < songRes.rows.length; i++){
			if(songRes.rows[i].song_name.toLowerCase() === songName){
				selectedSong.push(songRes.rows[i]);
			}
		}
		res.set('Content-Type', 'text/html');
		res.send(html_creator(selectedSong[0]));
	});
});

module.exports = router;