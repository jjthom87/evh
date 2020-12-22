/*
	https://www.npmjs.com/package/mysql
*/

//setup for connecting to database from node (server side javascript)

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
databaseConnection.connect(function(err, res){
	if(err){
		console.error("Error Connecting to Database");
		console.error(err);
	} else {
		console.log("Successfully connected to database");
		console.log(res);
	}
});
