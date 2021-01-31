/*
  - prompt the user if they would like to exit inquirer or not,
  - if not, then recursion
*/

const inquirer = require("inquirer");

function runFirstApp(){
  inquirer.prompt([
    {
    type: "list",
    message: "Select an Option?",
    choices: ["Keep Going", "Exit"],
    name: "option"
    }
  ]).then(function(answers){
    if(answers.option === "Keep Going"){
      /*
       This is called recursion, when you re-run a function by calling
       the function within itself. Look at the behavior of recursion
       when you run the runFirstApp() function

       If the user chooses "Keep Going", then inquirer will keep running
      */
      runFirstApp()
    } else {
      /*
        If the user chooses "Exit", then no recursion and stop the app
      */
      console.log("Exiting. Goodbye.")
    }
  });
}
// runFirstApp();

function runSecondApp(){
  const myCredentials = {
    username: "ozzy",
    password: "nmt"
  }
  inquirer.prompt([
    {
    type: "list",
    message: "Select an Option?",
    choices: ["Exit", "Sign In"],
    name: "option"
    }
  ]).then(function(answers){
    if(answers.option == "Sign In"){
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
      ]).then(function(answers){
        if(answers.username === myCredentials.username){
          if(answers.password === myCredentials.password){
            console.log("You've been signed in");
            inquirer.prompt([
              {
                type: "list",
                message: "Select an Option?",
                choices: ["Sign Out", "Exit"],
                name: "option"
              }
            ]).then(function(answer){
              if(answer.option === "Sign Out"){
                /*
                  Recursion happening here
                  Restarting from the top of the function
                */
                runSecondApp();
              } else {
                console.log("Exiting. Goodbye.")
              }
            })
          } else {
            console.log("Incorrect Password")
          }
        } else {
          console.log("Username Doesn't Exist")
        }
      })
    } else {
      console.log("Exiting. Goodbye.")
    }
  });
}
runSecondApp();
