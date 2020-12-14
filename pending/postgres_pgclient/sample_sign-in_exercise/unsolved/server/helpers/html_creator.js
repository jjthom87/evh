module.exports = (obj) => {
	var str = "<html>";
	str += "</html>";
	return str;
}

/*

	Export a function that returns an html String
		1. Have an h1 tag with the person's name
		2. Have 3 h3 tags for the persons favorite movie, song, & pizza
		3. The parameter in the function will be the object that comes out of the query
			i.e. res.rows[0]
		3. Optional: Have a route back to the sign in page

*/