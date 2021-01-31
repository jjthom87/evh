/*
  Use your 'users' table that should've already been created in mysql
*/
const mysql = require('mysql');
const inquirer = require('inquirer');

const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);

databaseConnection.connect();

inquirer.prompt([
  {
    type: "input",
    message: "Please set your first name",
    name: "first_name"
  },
  {
    type: "input",
    message: "Please set your last name",
    name: "last_name"
  },
  {
    type: "input",
    message: "Please set your email",
    name: "email"
  },
  {
    type: "input",
    message: "Please set your username",
    name: "username"
  },
  {
    type: "password",
    message: "Please set your password",
    name: "password"
  },
]).then(function(answers){
    let query = "INSERT INTO users (first_name, last_name, email, username, password) VALUES ";
    query += "(";
    query += "'"+answers.first_name+"',";
    query += "'"+answers.last_name+"',";
    query += "'"+answers.email+"',";
    query += "'"+answers.username+"',";
    query += "'"+answers.password+"')";
		databaseConnection.query(query, function(err, res){
      if(err){
        throw new Error(err)
      }
      console.log("Successfully Signed Up User!");
      databaseConnection.end();
    })
});
