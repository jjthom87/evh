/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */

//this is how you select items from a database to view them
//this query here is selecting all of the items from users table with the *
// pgClient.query('SELECT * FROM blog_post', function(err, result) {
//     console.log(result.rows);
//     pgClient.end();
// });

pgClient.query('SELECT id, post FROM blog_post WHERE user_id=2', (err,res) => {
	for(var i = 0; i < res.rows.length; i++){
		console.log(res.rows[i].post)
	}
	pgClient.end();
});
