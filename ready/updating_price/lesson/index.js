const mysql = require('mysql');

const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);
databaseConnection.connect();

/*
  View the schema.sql and run it against your 'first_sql' database
*/

function getConsumerBalanceAndUpdate(){
  const getConsumerQuery = "SELECT * FROM consumers WHERE name='George'";
  /* Getting the consumer */
  databaseConnection.query(getConsumerQuery, function(err, data){
    const consumer = data[0];
    const purchasedBreakfast = 20;
    const newBalance = data[0].balance - purchasedBreakfast;
    /* Updating the consumer balance after purchase */
    const updateConsumerBalanceQuery = "UPDATE consumers SET balance=" + newBalance + " WHERE id=" + consumer.id;
    databaseConnection.query(updateConsumerBalanceQuery, function(err, res){
      console.log("Balance Updated");
      databaseConnection.end();
    })
  })
}
getConsumerBalanceAndUpdate();
