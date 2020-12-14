$(document).ready(function(){

	$('#cud-select').on('change', function(){
		var selection = $('#cud-select').val();

		if(selection === "Create"){
			$('#cud-select-div').remove();
			var formDiv = $('<div id="cud-select-div">');
			formDiv.addClass('well');

			var createForm = $('<form id="create-form">');

			var artistLabel = $('<label>');
			artistLabel.text("Artist");
			var artistInput = $('<input id="artist-input" type="text">');
			var titleLabel = $('<label>');
			titleLabel.text("Title");
			var titleInput = $('<input id="title-input" type="text">');
			var priceLabel = $('<label>');
			priceLabel.text("Price");
			var priceInput = $('<input id="price-input" type="text">');
			var lyricLabel = $('<label>');
			lyricLabel.text("Lyric");
			var lyricInput = $('<textarea id="lyric-input" type="text">');
			createForm.append(artistLabel).append("<br>").append(artistInput).append("<br>");
			createForm.append(titleLabel).append("<br>").append(titleInput).append("<br>");
			createForm.append(priceLabel).append("<br>").append(priceInput).append("<br>");
			createForm.append(lyricLabel).append("<br>").append(lyricInput).append("<br>");

			var submitInput = $('<input class="btn btn-info" type="submit">');
			createForm.append("<br>").append(submitInput);

			formDiv.append(createForm);
			$('#cud-div').append(formDiv);
		} else if (selection === "Update"){
			$('#cud-select-div').remove();

			var selectDiv = $('<div id="cud-select-div">');
			selectDiv.addClass('well');

			var songsSelect = $("<select id='songs-select'>");
			var defaultOption = $('<option>');
			defaultOption.text('Select One Record to Update');
			defaultOption.attr('disabled', true);
			defaultOption.attr('selected', true);
			songsSelect.append(defaultOption);
			songsSelect.css({margin: '5px'})
			$.ajax({
				method: 'GET',
				url: '/api/songs'
			}).then(function(res){
				var option;
				res.songs.forEach((song) => {
					option = $("<option>");
					option.attr('value', song.song_artist + " - " + song.song_name);
					option.text(song.song_artist + " - " + song.song_name);
					songsSelect.append(option);
				});
			});
			selectDiv.append(songsSelect).append("<br>");

			var fieldsSelect = $("<select id='fields-select'>");
			var defaultOption = $('<option>');
			defaultOption.text('Select the Field Being Updated');
			defaultOption.attr('disabled', true);
			defaultOption.attr('selected', true);
			fieldsSelect.append(defaultOption);
			fieldsSelect.css({margin: '5px'})

			var updateFieldChoices = ['Song', 'Artist', 'Price', 'Lyrics'];
			var option;
			updateFieldChoices.forEach((fields) => {
				option = $("<option>");
				option.attr('value', fields);
				option.text(fields);
				fieldsSelect.append(option);
			});
			selectDiv.append(fieldsSelect).append("<br>");

			var selectedField = $("#fields-select").val();
			var updatedInput = $("<textarea id='updated-input'>");
			updatedInput.attr('placeholder', 'Updated value');
			selectDiv.append(updatedInput).append("<br>");

			var enterButton = $('<button id="enter-udpate-button">');
			enterButton.addClass('btn btn-primary');
			enterButton.text("Enter");
			enterButton.attr("disabled", true);
			selectDiv.append(enterButton);

			$('#cud-div').append(selectDiv);
		} else if (selection === "Delete"){
			$('#cud-select-div').remove();
			var selectDeleteDiv = $('<div id="cud-select-div">');
			selectDeleteDiv.addClass('well');

			var songsSelect = $("<select id='songs-select-delete'>");
			var defaultOption = $('<option>');
			defaultOption.text('Select One Record to Delete');
			defaultOption.attr('disabled', true);
			defaultOption.attr('selected', true);
			songsSelect.append(defaultOption);
			songsSelect.css({margin: '5px'})
			$.ajax({
				method: 'GET',
				url: '/api/songs'
			}).then(function(res){
				var option;
				res.songs.forEach((song) => {
					option = $("<option>");
					option.attr('value', song.song_artist + " - " + song.song_name);
					option.text(song.song_artist + " - " + song.song_name);
					songsSelect.append(option);
				});
			});
			selectDeleteDiv.append(songsSelect).append("<br>");

			var enterButton = $('<button id="enter-delete-button">');
			enterButton.addClass('btn btn-danger');
			enterButton.text("Delete");
			enterButton.attr("disabled", true);
			selectDeleteDiv.append(enterButton);

			$('#cud-div').append(selectDeleteDiv);
		}
	});

	$(document).on('submit', '#create-form', function(e){
		e.preventDefault();
		var createObj = {
			artist: $('#artist-input').val(),
			title: $('#title-input').val(),
			price: $('#price-input').val(),
			lyrics: $('#lyric-input').val()
		}

		$.ajax({
			method: 'POST',
			url: '/api/create-record',
			data: createObj
		});

		$('#artist-input').val("")
		$('#title-input').val("")
		$('#price-input').val("")
		$('#lyric-input').val("")
	});

	$(document).on('change', '#songs-select', function(){

		$.ajax({
			method: 'GET',
			url: '/api/songs'
		}).then(function(res){
			var songArtistSelectArr = [];
			res.songs.forEach((song) => {
				var songArtist = song.song_artist + " - " + song.song_name;
				if(songArtist === $('#songs-select').val()){
					songArtistSelectArr.push(song);
				}
			});
			if($("#fields-select").val() === "Artist"){
				$('#updated-input').text(songArtistSelectArr[0].song_artist);
			} else if ($("#fields-select").val() === "Song"){
				$('#updated-input').text(songArtistSelectArr[0].song_name);
			} else if ($("#fields-select").val() === "Price"){
				$('#updated-input').text(songArtistSelectArr[0].price);
			} else if ($("#fields-select").val() === "Lyrics") {
				$('#updated-input').text(songArtistSelectArr[0].lyrics);
			}
			if($('#fields-select').val() !== null){
				$('#enter-udpate-button').attr("disabled", false);
			}
		});

	});

	$(document).on('change', '#fields-select', function(){

		if($('#songs-select').val() !== null){
			$.ajax({
				method: 'GET',
				url: '/api/songs'
			}).then(function(res){
				var songArtistSelectArr = [];
				res.songs.forEach((song) => {
					var songArtist = song.song_artist + " - " + song.song_name;
					if(songArtist === $('#songs-select').val()){
						songArtistSelectArr.push(song);
					}
				});
				if($("#fields-select").val() === "Artist"){
					$('#updated-input').text(songArtistSelectArr[0].song_artist);
				} else if ($("#fields-select").val() === "Song"){
					$('#updated-input').text(songArtistSelectArr[0].song_name);
				} else if ($("#fields-select").val() === "Price"){
					$('#updated-input').text(songArtistSelectArr[0].price);
				} else if ($("#fields-select").val() === "Lyrics") {
					$('#updated-input').text(songArtistSelectArr[0].lyrics);
				}
				$('#enter-udpate-button').attr("disabled", false);
			});
		}

	});

	$(document).on('click', '#enter-udpate-button', function(){
		var selectedSong = $('#songs-select').val();
		var selectedField = $("#fields-select").val();
		var updateInputValue = $('#updated-input').val();

		var updateData = {
			song: selectedSong,
			field: selectedField,
			value: updateInputValue
		}

		$.ajax({
			method: 'PUT',
			url: '/api/update-record',
			data: updateData
		});

		$('#songs-select').val("");
		$("#fields-select").val("");
		$('#updated-input').val("");
	});

	$(document).on('change', '#songs-select-delete', function(){
		$('#enter-delete-button').attr("disabled", false);
	});

	$(document).on('click', '#enter-delete-button', function(){
		$.ajax({
			method: 'GET',
			url: '/api/songs'
		}).then(function(res){
			var songArtistSelectArr = [];
			res.songs.forEach((song) => {
				var songArtist = song.song_artist + " - " + song.song_name;
				if(songArtist === $('#songs-select-delete').val()){
					songArtistSelectArr.push(song);
				}
			});
			$.ajax({
				method: 'DELETE',
				url: '/api/delete-record/' + songArtistSelectArr[0].id
			});
			$('#enter-delete-button').attr("disabled", true);
			$('#songs-select-delete').val("");
		});
	})

});