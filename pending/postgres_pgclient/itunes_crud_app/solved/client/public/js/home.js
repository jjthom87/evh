$(document).ready(function(){

	$.ajax({
		method: 'GET',
		url: '/api/songs'
	}).then(function(results){
		console.log(results)
		var newRow, numTd, artistTd, titleTd;
		for(var i = 0; i < results.songs.length; i++){
			newRow = $('<tr class="song-row" data-song_name=' + results.songs[i].song_name.split(" ").join("+").toLowerCase() +'>')
			numTd = $('<td>');
			artistTd = $('<td>');
			titleTd = $('<td>');

			numTd.text(i + 1);
			artistTd.text(results.songs[i].song_artist);
			titleTd.text(results.songs[i].song_name);
			newRow.append(numTd).append(artistTd).append(titleTd);
			$('#tbody').append(newRow)
		}
	});

	$(document).on('click', '.song-row', function(){
		var songName = $(this).data('song_name');
		window.location.href = '/api/song-lyrics/' + songName;
	});

});