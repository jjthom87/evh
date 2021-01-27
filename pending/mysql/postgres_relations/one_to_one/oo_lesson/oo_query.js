/* <------------------------------------------------------------------> */

//setup for connection database
var mysql = require('mysql');

//creating the connection to the database
var databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);

//officially connecting to the mysql database
databaseConnection.connect();

/* Inserting a new record into the 'users' table */
databaseConnection.query("INSERT INTO users (first_name, last_name, email, username, password) VALUES ('Tali', 'Baba', tali@yahoo.com", "tali", "baba", function(err, data){});
/* <------------------------------------------------------------------> */
pgClient.query("SELECT id FROM users where username='jjthom87'", (error,results) => {
	console.log(results.rows)
	pgClient.query('SELECT * FROM blog_post WHERE user_id=' + results.rows[0].id, (err,res) => {
		console.log(res.rows);
	 	pgClient.end();
	});
});
