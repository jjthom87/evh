# Inquirer & Postgres

Use Inquirer and Postgres to make a command line tool that:

* Asks if they would like to do a delete, update, select, or insert
* If they choose select, then it runs a query that looks for every item from a table of your choice and console.logs those items
* If they choose insert, then you will have to prompt a new inquirer, telling them what they would like to input for each field. The values in the insert query will come from the object created by inquirer for the answers given.
* If they choose update, then you will have to prompt another inquirer, asking them:
	* The field of the new update value
	* The new value
	* The field where it is being updated
	* The value in which you want to change in that field
* If they choose delete, then you will have to prompt another inquirer, asking them:
	* The field where it is being deleted
	* The value of the field in which you want deleted	