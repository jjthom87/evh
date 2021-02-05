var inquirer = require('inquirer');
const databaseConnection = require('./database_connection.js');

const signUp = (runApp) => {
  console.log("Welcome to the iTunes sign up page");
  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your username?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    }
  ]).then(function(signup){
    databaseConnection.query('INSERT INTO users (name, username, password) VALUES (\''+signup.name+'\', \''+signup.username+'\', \''+signup.password+'\')', function(signUpErr, signUpResult) {
      if(signUpErr){
        if(signUpErr.toString().indexOf('duplicate key value violates unique constraint "users_username_key"') > -1){
          console.log("Username already taken, please re-enter");
          signUp();
        } else {
          console.log("Error: " + signUpErr);
          signUp();
        }
      } else {
        console.log("Thank you for signing up. Please sign in now");
        runApp();
      }
    });
  });
}

module.exports = signUp;
