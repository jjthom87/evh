var mysql = require('mysql');
var inquirer = require('inquirer');

const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);
databaseConnection.connect();

inquirer.prompt([
  {
  type: "list",
  message: "Select an Option?",
  choices: ["Sign Up", "Sign In"],
  name: "first_option"
  }
]).then(function(answers){
  if(answers.first_option == "Sign In"){
    inquirer.prompt([
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
    ]).then(function(sign_in){
      const signInQuery = "SELECT * FROM users WHERE username='"+sign_in.username+"'";
      databaseConnection.query(signInQuery, function(err, data){
        /*
          you can use the isEmptyArray function (botton of this file) here as well
          it's a function that you can connect and run on an array (like "indexOf" or "join"),
          and we created it using prototype.
        */
        if(data.length > 0){
          var user = data[0];
          if(sign_in.password === user.password){
            console.log("You've been signed in");
            databaseConnection.end();
          } else {
            console.log("Incorrect credentials. Please attempt logging in again.");
            databaseConnection.end();
          }
        } else {
          console.log("Username doesn't exist");
          databaseConnection.end();
        }
      })
    });
  } else {
    inquirer.prompt([
      {
        type: "input",
        message: "What is your first_name?",
        name: "first_name"
      },
      {
        type: "input",
        message: "What is your last_name?",
        name: "last_name"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
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
    ]).then(function(sign_up){
      let query = "INSERT INTO users (first_name, last_name, email, username, password) VALUES ";
      query += "(";
      query += "'"+sign_up.first_name+"',";
      query += "'"+sign_up.last_name+"',";
      query += "'"+sign_up.email+"',";
      query += "'"+sign_up.username+"',";
      query += "'"+sign_up.password+"')";
      databaseConnection.query(query, function(err, res){
        if(err){
          if(err.sqlMessage.includes("Duplicate entry")){
            console.log("Username Already Taken");
            databaseConnection.end();
          } else {
            throw new Error(err)
            databaseConnection.end();
          }
        } else {
          console.log("Successfully Signed Up User!");
          console.log("Please Sign In");
          databaseConnection.end();
        }
      })
    });
  }
});

Array.prototype.isEmptyArray = function(){
  return this.length === 0;
}
