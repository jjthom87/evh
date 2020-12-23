// 'Update' of CRUD

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

//this is the query to update item(s) in the database
//similar to the code for the insert
//Updating all of the records in the 'users' table where the first_name column is equal to Johnny to have first_name be 'Jimmy'
databaseConnection.query("UPDATE users SET first_name='Johnny' where first_name='Jimmy'", function(err, result){
	if(err){
    //if there was an error when calling the database
    //then error is logged here
    console.log(err)
  } else {
    //if update was successful
    //then result logged here
    console.log("Update Successful")
    console.log(result)

    // closing the database connection
    databaseConnection.end();
  }
});
