/* <------------------------------------------------------------------> */

//setup for connection database

//node modules to request
var pg = require('pg');
var express = require('express');
var inquirer = require('inquirer');

//var app = express();

//you have to pick the database to connect to;
var dbUrl = {
	user: 'jaredthomas',
	password: '',
	database: 'first_db',
	host: 'localhost',
	port: 5432
};

//creating a client to connect to, which as you see, uses the object that we set up
var pgClient = new pg.Client(dbUrl);

//officially connecting to that postgres database
pgClient.connect();

/* <------------------------------------------------------------------> */


inquirer.prompt([
	{
		type: "list",
		message: "What query would you like to run for the users table?",
		choices: ["select", "insert"],
		name: "sql"
	}
]).then(function(res){
	if(res.sql === "select"){
		pgClient.query('SELECT * FROM users', function(err, result) {
		     console.log(result.rows);
		     pgClient.end();
		});
	} else if (res.sql === "insert"){
		inquirer.prompt([{
			type: "input",
			message: "What is the user's first name?",
			name: "first_name"
		},
		{
			type: "input",
			message: "What is the user's last name?",
			name: "last_name"
		},
		{
			type: "input",
			message: "What is the user's email?",
			name: "email"
		},
		{
			type: "input",
			message: "What is the user's username?",
			name: "username"
		},
		{
			type: "input",
			message: "What is the user's password?",
			name: "password"
		}]).then(function(results){
			pgClient.query('INSERT INTO users (first_name, last_name, email, username, password) VALUES ($1, $2, $3, $4, $5)', [results.first_name, results.last_name, results.email, results.username, results.password] , function(err, result) {
				if(err) throw err;
			    console.log("Fields Inserted");
			    pgClient.end();
			});
		});
	}
});