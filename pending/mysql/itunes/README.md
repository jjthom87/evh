# iTunes Application

<h2>Goal</h2>

Develop a command line tool which stores users information and let's them buy and view their music using Node, Postgres & Inquirer.

<h2>Assignment</h2>

* Create a database called itunes.

* Have 3 tables:
	* A pre-populated songs table
		* Columns: id, song_title, song_artist
	* A users table
		* Columns: id, name, username, password
	* A pivot table which stores what songs people have bought
		* Columns: id, song_id, user_id
* Pre-populate a songs table.
* Start off with Inquirer: This is where you will create your username if it does not exist in the database
* Inquirer should prompt: Sign Up/Sign in
* The sign in should check username and password.
* If the username is not in the database, then you can tell the client to sign up and close the connection.
* If the username is in the database, then prompt them to enter their password.
* If the password matches the user's account, then prompt them either:
* If they would like to add a song
* Have it prompt what songs are available
* Ask them what song they would like to add
* Check the songs that they have
* Get their songs from the database

<h2>Bonus</h2>

* Create a bank table:
	* id, balance, user_id
* Every time a user account is created, a bank record is created for that user
* Add a column to your songs table called 'amount' which will be an INT and give each song a price
* When the user adds a song, have it deduce the amount that the song is priced at from the user's balance in the bank table.
* Add a "View Your Balance" option to the inquirer prompt
	* This should show the user's balance in the bank

* Use recursion to:
	* Bring the app back to the sign up/sign in prompt if the username or password is incorrect
	* Bring the app back to the user options prompt after a transaction is done
	