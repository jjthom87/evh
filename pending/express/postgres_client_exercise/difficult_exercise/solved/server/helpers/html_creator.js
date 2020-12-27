function formatLyrics(lyrics){
	var spanStr = "";
	var lyricArr = lyrics.split("\n");
	for(var i = 0; i < lyricArr.length; i++){
		spanStr += "<span>" + lyricArr[i] + "</span><br>"
	}
	return spanStr;
}

module.exports = (obj) => {
	var str = "<html>";
	str += "<head><title>" + obj.song_name + "'s Lyrics</title>"
	str += "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'></head>";
	str += "<a href='/'><button class='btn btn-warning'><span class='glyphicon glyphicon-home' aria-hidden='true'></span></button></a>"
	str += '<body><h1 id="header">' + obj.song_artist + ' - ' + obj.song_name + '</h1><br>';
	str += formatLyrics(obj.lyrics)
	str += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'></script>";
	str += "</body></html>";
	return str;
}