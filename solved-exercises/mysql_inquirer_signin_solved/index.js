const mysql = require("mysql");
const inquirer = require("inquirer");

const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);
databaseConnection.connect();

inquirer.prompt([
  {
    type: "input",
    message: "Please enter your username",
    name: "username"
  },
  {
    type: "password",
    message: "Please enter your password",
    name: "password"
  }
]).then(function(answers){
  const username = answers.username;
  const password = answers.password;
  databaseConnection.query("SELECT * FROM users WHERE username='"+username+"'", function(err, data){
    var user = data[0];
    if(user){
      if(password == user.password){
        console.log("You have signed in " + user.first_name);
        databaseConnection.end();
      } else {
        console.log("Incorrect Password");
        databaseConnection.end();
      }
    } else {
      console.log("Username " + username + " does not exist");
      databaseConnection.end();
    }
  });
});
