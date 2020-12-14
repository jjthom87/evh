/*
	I am exporing this function because i dont want it to clutter up my routes.js file
	I am merely return an html string. Look for where i am using it in the routes.js file.
	It makes it look a lot nicer, and doesn't clutter up everything
*/

module.exports = (obj) => {
	var str = "<html>";
	str += "<head><title>" + obj.name + "'s Page</title>"
	str += "<link rel='stylesheet' type='text/css' href='../css/profile.css'>"
	str += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'></head>";
	str += '<body><h1 id="hello">Hello ' + obj.name + '</h1><br>';
	str += '<img id="pic" src="../images/' + obj.picture + '"/>';
	str += '<h3 id="desc">' + obj.description + '</h3><br>'
	str += '<div></div>'
	str += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>";
	str += "<script src='../js/profile.js'></script>";
	str += "</body></html>";
	return str;
}