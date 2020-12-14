# Download Postgres & Postico

# First day of Postgres

<h1>Installation</h1>

1. Download Postgres
	* https://www.codementor.io/devops/tutorial/getting-started-postgresql-server-mac-osx
	* This is to download the software to run a separate server that connects to a postgres database

2. Download Postico
	* https://eggerapps.at/postico/
	* This is the ui in which you will be available to view the data in your database
	* This connects to your database server

3. Go through the installation process on both of those. Pick the most standard options.
4. Test out postgres in the terminal by typing ```postgres -V```
5. Next, type this command in the terminal:

	```createdb testdb```


6. Log into postico. Should look like this:
	* I have no password, as that is how I set it up on postico
	* That's the login name of my computer that Postico assigns
	* Port 5432 and a host of localhost is conventional.

7. Click on ```connect```, and if you get through without a problem, then you are ready to start creating tables and saving data