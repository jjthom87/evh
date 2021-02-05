//setup for connection database
const mysql = require('mysql');

//creating the connection to the database
const databaseConnection = mysql.createConnection("mysql://root:@localhost:3306/itunes");

module.exports = databaseConnection;
