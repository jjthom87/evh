# Inquirer & Postgres

Use Inquirer and Postgres to make a command line tool that:

* Asks if they would like to do a select or an insert
* If they choose select, then it runs a query that looks for every item from a table of your choice and console.logs those items
* If they choose insert, then you will have to prompt a new inquirer, telling them what they would like to input for each field. The values in the insert query will come from the object created by inquirer for the answers given.