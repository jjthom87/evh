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

/*
	1. Send all columns from songs table to the client
	2. call the route /api/songs
	3. res.json(res.rows)
*/


/*
	1. Route should be /api/song-lyrics/:song_name
	2. From the front end, when the table row is clicked on, compare the song (req.params.song_name) 
	   that is clicked to the row in the database where that song_name is located.
	   remember to match them up, as req.params.song_name will have the "+" to lowercase
	   format the songs in the query to have the same format
	3. Push that matching song to an array that you can name: selectedSong
	4. Use the zero index of that array, and pass it through as the parameter in your html creator function
	5. Send the htmlCreator through. Should look like this:
		res.set('Content-Type', 'text/html');
		res.send(html_creator(selectedSong[0]));	
*/

module.exports = router;