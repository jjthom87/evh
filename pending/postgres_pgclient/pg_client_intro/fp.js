/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');

//you have to pick the database to connect to;
var dbUrl = {
	user: 'postgres',
	password: '',
	database: 'first_db',
	host: 'localhost',
	port: 5433
};

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */

//this is how you select items from a database to view them
//this query here is selecting all of the items from users table with the *
pgClient.query('SELECT * FROM users', function(err, result) {
    console.log(result.rows);
		pgClient.end();
});

// This is the query to insert/add items to a database
/* as you can see by the query:
	* INSERT INTO - querying to add to database
	* users - which table you want to add to
	* (first_name, last_name, email, username, password) - fields in the table you will be adding to
	* VALUES ($1, $2, $3, $4, $5) - declaring that we will be inserting 5 values
	* ["Joey", "Bags", "joeybags@joeybags.com", "joeybags", "jb"] - the values that i am adding, as you can see 5 of them, represented through insert by the $
	* then the callback
*/
//pgClient.query('INSERT INTO users (first_name, last_name, email, username, password) VALUES ($1, $2, $3, $4, $5)', ["johnny", "booss", "joeybags@joeybags.com", "johnnyybags", "jb"] , function(err, result) {
	//if(err) console.log(err)
     //console.log(result);
//});

//this is the query to update items in the database
//similar to the code the insert
//the query is saying to update the first_name field(s) in the users table where the id is 2 to 'jared'
// pgClient.query("UPDATE users SET first_name=$1 where last_name='lkkjhkjhkjh'", ['jared'], function(err, result){
// 	if(err) console.log(err)
// 	//console.log(result)
// });

//this is the query to delete an item from the database
//the query is saying to delete the field(s) in the user table where the id is 2
// pgClient.query('DELETE FROM users WHERE id=2', function(err, result){
// 	if(err) console.log(err)
// 	//console.log(result)
// });
