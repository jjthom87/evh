// 'Read' of CRUD

//importing the mysql module into this file
var mysql = require('mysql');

//creating a database client to connect to,
//which as you see, uses the object that we set up
//you can also export this from the connection.js file
var databaseConnection = mysql.createConnection({
	user: 'root',
	password: '',
	database: 'first_sql',
	host: 'localhost',
	port: 3306
});

//connecting to the database
databaseConnection.connect();

/* <------------------------------------------------------------------> */

//this is how you select items from a database to view them
//this query here is selecting all of the items from users table with the *
//this is a Read from the database.
databaseConnection.query('SELECT * FROM users', function(err, result) {
	// if there was an error when calling the database
	if(err){
		// error logged here
		console.log(err)
	} else {
		//logging the result from the database
		console.log("All of the user records from the database")
		console.log(result)
		//logging the person's name in the first record

		console.log("First Records First Name")
		console.log(result[0].first_name)

		// closing the database connection
		databaseConnection.end();	
	}
});
