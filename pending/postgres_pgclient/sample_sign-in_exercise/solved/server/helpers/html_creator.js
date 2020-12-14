module.exports = (obj) => {
	var str = "<html>";
	str += "<head><title>" + obj.name + "'s Page</title>"
	str += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'></head>";
	str += '<body><h1 id="hello">What\'s up ' + obj.name + '</h1><br>';
	str += '<h3>Favorite Movie: ' + obj.fav_movie + '</h3>';
	str += '<h3>Favorite Song: ' + obj.fav_song + '</h3>';
	str += '<h3>Favorite Pizza: ' + obj.fav_pizza + '</h3>';
	str += '<a href="/">Back To Login</a>'
	str += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>";
	str += "</body></html>";
	return str;
}