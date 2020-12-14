/*

Instructions: Create an app that sends information about Pokemon through an object provided
	1. npm init, npm install express and body-parser. don't forget your .gitignore
	2. import the array from object.js
	3. dont forget to store express in a variable, and include your middle of app.use(bodyParser.json())
	4. create a get route called '/all-pokemon' where you send as json all of the pokemon
	5. create a get route called '/evolved-pokemon' where you send as json all of the evolved pokemon
		- tip: filter through the items, then send that filter through
	6. create a get route called '/non-evolved-pokemon' where you send as json all of the non-evolved pokemon
		- tip: filter through the items, then send that filter through
	7. create a get route called '/pokemon/:poke', where it only sends through information for the pokemon that you put '/pokemon/<in here>'
		- a little tip, since you are looping, then push that one pokemon to array, and send that pokemon through to json
	8. create a post route called '/submit-new-poke' that:
		- posts this object(use postman)
			{
				"name": "Blastoise",
				"evolvedFrom": true,
				"evolvesTo": "undefined"
			}
		- then send through (either res.json or res.send) the message "<this pokemon> has evolved to <that pokemon>"
	9. set up a wildcard (*) route where if that route was not set up in your routes, it sends a 404 with a custom message
	10. set up a listen route to run your server
*/