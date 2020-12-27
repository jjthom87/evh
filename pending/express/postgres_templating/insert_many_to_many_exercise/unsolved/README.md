# Insert Many to Many Exercise

<strong>Assignment</strong>

Use inquirer and postgres to have a user sign in (username & password) and give them the option to view the products they have bought or if they would like to add a product (no bank for this exercise, just add it to the db);


<strong>Instructions</strong>

1. Prompt the user to enter their username and password
2. Check if the username exists in the database (log an error if it doesnt)
3. Check if the username and password from the record in the database match (log an error if the password doesn't match)
4. Once signed in, prompt the user if they would like to view the items that they have bought or add items.
5. If they select to view the items that they have bought, use a many to many relationship to log that for the user
6. If they select to buy items, prompt them options for what is available to add
7. Once they select an option, use an insert to add it to the bought_products table
8. Use recursion to:
	* Bring the app back to the sign up/sign in prompt if the username or password is incorrect
	* Bring the app back to the user options prompt after a transaction is done
9. DONE!