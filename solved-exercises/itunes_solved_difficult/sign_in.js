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
            databaseConnection.query(`SELECT * FROM bank WHERE user_id=${user.id}`, function(errTwo, resTwo){
              if(errTwo){
                console.log(errTwo)
              } else {
                if(resTwo.length == 0){
                  databaseConnection.query('INSERT INTO bank (user_id) VALUES ('+user.id+')', function(errThree, resThree){
                    if(errThree){
                      console.log(errThree);
                    }
                  })
                }
              }
            });
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
