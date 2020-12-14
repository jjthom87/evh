/*

	- Create a crud application with inquirer and postgres
	- All CRUD is done through inquirer

	1. Create a User
	2. Create a profile for that user
	3. Update the profile of that user
	4. Delete the profile and then the user

	Solved Structure:

	- inquirer prompts to create user
		- postgres insert into users table
		- inquirer promps to create a profile
			- postgres select user by username to get users id
				- postgres insert into profile table
			- inquirer prompts what field in the profile table you would like to
			  update, and then what value you would like to update
				- postgres select user by username to get users id
					- postgres update profile table
				- inquirer prompts which user id you would like to delete
					- postgres select user by username to get users id
						- postgres delete profile by user id
						- postgres delete user by id

*/