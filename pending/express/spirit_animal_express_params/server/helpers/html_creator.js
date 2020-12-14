module.exports = (obj) => {
	var str = "<html>";
	str += "<head><title>" + obj.name + "'s Page</title>"
	str += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'></head>";
	str += '<body><h1 id="hello">You are the ' + obj.name + '</h1><br>';
	str += '<img id="pic" src="../images/' + obj.name + '.jpg"/>';
	str += '<ul id="desc">' + createList(obj.overall) + '</ul><br>'
	str += '<div></div>'
	str += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>";
	str += "</body></html>";
	return str;
}

const createList = (li) => {
	var splitty = li.split(";");

	var strTwo = "";
	for(var i = 0; i < splitty.length; i++){
		if(splitty[i]){
		splitty[i] = splitty[i].trim();
		splitty[i] = splitty[i].charAt(0).toUpperCase() + splitty[i].substring(1, splitty[i].length);
			strTwo += "<li>" + splitty[i] + "</li>"
		}
	}
	return strTwo;
}