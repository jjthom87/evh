# Profile Page

Create a full stack application with node, express, and jquery where 
you click on a picture and it brings you to their profile.

1. Have a data object that stores information about each user
2. Have a connection to your home page through your server, which has the pictures of people on it
3. When that picture is clicked, it brings you to their profile page
	* This is going to require you to set a data-<whatever> for each picture in the jQuery
	* This is going to require you to use params in your route
	* This is going to require you to send that info over as html, so ```res.set('Content-Type', 'text/html');``` as well. This means you are sending an html string to the client with the
	* person that you clicked on's information. This is all happening in the params route.

Overall, on your main page, there are pictures of people who are on your website. You click on one of their pictures, it brings you to their profile page.