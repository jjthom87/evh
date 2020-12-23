/* Creating the 'users' table in the database */
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	email VARCHAR(255),
	username VARCHAR(255),
	password VARCHAR(255)
);

/* Creating a record in the 'users' table */
INSERT INTO users (first_name, last_name, email, username, password) VALUES ("Jared", "Thomas", "jjthom87@yahoo.com", "jjthom87", "whatever");

/* Getting all of the records from the 'users' table */
SELECT * FROM users

/* Updating record(s) from the 'users' table */
UPDATE users SET first_name='Johnny' where first_name='Jimmy'

/* Deleting record(s) from the 'users' table */
DELETE FROM users WHERE first_name='Johnny'
