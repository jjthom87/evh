// 'Create' of CRUD

//importing the mysql module into this file
var mysql = require('mysql');

//creating a database client to connect to,
//which as you see, uses the object that we set up
var databaseConnection = mysql.createConnection({
	user: 'root',
	password: '',
	database: 'first_sql',
	host: 'localhost',
	port: 3306
});

//connecting to the database
databaseConnection.connect();

// This is the query to insert/add items to a database
// This is a CREATE to the database
/* as you can see by the query:
	* INSERT INTO - querying to add to database
	* users - which table you want to add to
	* (first_name, last_name, email, username, password) - fields in the table you will be adding to
	* VALUES ('Jimmy', 'Bags', 'jimmybags@bags.com', 'jimmybags', 'password') - declaring that we will be inserting 5 values
	* then the callback (err, result)
*/
databaseConnection.query("INSERT INTO users (first_name, last_name, email, username, password) VALUES ('Joey', 'Bags', 'joeybags@bags.com', 'joeybags', 'password')", function(err, result) {
	if(err){
		//if there was an error when calling the database
		//then logging the error
		console.log(err);
	} else {
		// if not error, then logging the successful response from the database insert here
    console.log("Logging the response")
    console.log(result);

    // closing the database connection
		databaseConnection.end();
	}
});
