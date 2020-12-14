$(document).ready(function(){

	$.ajax({
		method: 'GET',
		url: '/api/getRoute'
		/*
			remember this route we set up on the server side 
			this is how we access it on the client side
		*/
	}).then(function(res){
		//console.log(res)
		//this is what i am res.json(<object>) over from my server/routes.js
		var newRow, nameTd, ageTd, heightTd;
		for(var i = 0; i < res.length; i++){
			newRow = $('<tr>')
			nameTd = $('<td id="name">');
			ageTd = $('<td id="age">');
			heightTd = $('<td id="height">');

			nameTd.text(res[i].name);
			ageTd.text(res[i].age);
			heightTd.text(res[i].height);
			newRow.append(nameTd).append(ageTd).append(heightTd);
			$('#tbody').append(newRow)
		}

	});

});