var inquirer = require('inquirer');
const databaseConnection = require('./database_connection.js');

const signIn = function(runApp, userIsSignedIn){
  inquirer.prompt([
    {
      type: "input",
      message: "What is your username?",
      name: "username",
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password",
    }
  ]).then((res) => {
    databaseConnection.query(`SELECT * FROM users WHERE username='${res.username}'`, function(err, result) {
      if(result.length > 0){
          const user = result[0];
          if(user.password === res.password){
            userIsSignedIn(user)
          } else {
            console.log("Incorrect Password");
            runApp();
          }
      } else {
        console.log("Username doesn't exist");
        runApp();
      }
    });
  });
}

module.exports = signIn;
