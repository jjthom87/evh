$(document).ready(function(){

	$.ajax({
		method: 'GET',
		url: '/api/all-users'
	}).then(function(results){
		var newRow, nameTd, gradeTd;
		for(var i = 0; i < results.length; i++){
			newRow = $('<tr id="grades-tr">')
			idTd = $('<td>');
			nameTd = $('<td>');
			usernameTd = $('<td>');

			idTd.text(results[i].id);
			nameTd.text(results[i].name);
			usernameTd.text(results[i].username);
			newRow.append(idTd).append(nameTd).append(usernameTd);
			$('#tbody').append(newRow)
		}
	});

});