const mysql = require('mysql');
const inquirer = require('inquirer');

const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);
databaseConnection.connect();

console.log("Inserting into the 'students' table")
inquirer.prompt([
  {
    type: "input",
    message: "What is the value for the 'name' column?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the value for the 'age' column?",
    name: "age"
  }
]).then(function(answers){
  const name = answers.name;
  const age = answers.age;
  /*
    The reason for the single quotes around the double quotes is because sql expects quotes around a string/varchar
  */
  const insertQuery = "INSERT INTO students (name) VALUES ('"+name+"','"+age+"')";
  databaseConnection.query(insertQuery, function(err, data){
    try {
      if(err){
        throw new Error(err)
      }
    } catch (e){
      console.log("ERROR!")
      console.log(e)
    } finally {
      databaseConnection.end();
    }
  })
});
