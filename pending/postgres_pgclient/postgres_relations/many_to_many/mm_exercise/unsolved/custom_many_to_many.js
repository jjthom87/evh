/* <------------------------------------------------------------------> */

//set up your connection for the database here

/* <------------------------------------------------------------------> */

/*

	1. use inquirer prompt the user for their username and password
	2. first, check if the username exists in the database.
	3. If the username does not exist, console an error that it does not exist
	4. If it does exist, then compare the password entered to the password in the database
	5. if the password does not match, console an error
	6. if the password does match, then show the products that the user bought

	Solved Structure:
	- inquirer prompts user to enter username and password
		- postgres select from users where username equals
			- conditional to check if username exists
				- conditional to check if password for username is correct
					- postgres many to many select

*/