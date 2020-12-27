# iTunes Crud App

<h2>First Part</h2>

1. Create a database called iTunes_crud
2. Use the schema.sql file to create this one table
3. Insert up to 3 records.
	* Insert the lyrics through postico
	* You can just copy the lyrics from the net and paste them right into postico
4. Your home page will be a table consisting of all of the songs titles and artists
5. Whenever you hover over a row, give the row a color
6. When you click on a row, it redirects you to a page that contains the songs lyrics
	* This lyrics page will be a parameterized route
	* Use the html creator here
	* Include a button back home from this page
7. Get all of this done before moving onto the crud part of the application
8. Since you are working as a team, split up the roles
	* Have one person write the routes
	* Have one person write the html
	* Have one person write the jquery
	* Have one person who has all of the code to run
	* You can send the code file through email, or make a github repo for them to copy and paste

<h2>Crud App</h2>

1. Have a button on the home page that links to another page called "/update"
2. This page will have a dropdown with the options of "Create", "Update", & "Delete"
3. When "Create" is selected in the dropdown:
	* A form will pop up with 3 inputs for the artist, title, and price & a text area for the lyrics
	* Don't forget an enter/submit button
	* When the button is clicked, it will add this record to the database
		* Connect a front-end/back-end route
		* Send over the data
		* Do the add with the postgres client
4. When "Delete" is selected in the dropdown:
	* A dropdown with all of the songs artists and names will append to the screen
		* All the fields in the dropdown should look like this "<song_artist> - <song_name>"
	* A "Delete" button shall append as well
	* Make sure the delete button is only able to be clicked when there is a value in the song dropdown
	* When the delete button is clicked
		* This will connect to a delete route on the server side
		* This should be a parameterized route, which means the id will be sent from the front end
		* This should delete the record in the database
5. When "Update" is selected in the dropdown (the most difficult, so save for last):
	* A dropdown with all of the songs artists and names will append to the screen
		* All the fields in the dropdown should look like this "<song_artist> - <song_name>"
	* A dropdown with all the options of the field name to be updated will append to the screen
	* A textarea for the new value that the field for that record will be updated with
	* An enter button will append as well
	* The enter button will be disabled unless there is a value in the song & field dropdown
	* Try to have the enter button disabled when there is no input in the textarea as well
	* Even try to populate the input with the value represented in the database by the song & that field
	* When the enter button is pressed:
		* This will connect to a put route on the server side
		* This will update the record in the database


