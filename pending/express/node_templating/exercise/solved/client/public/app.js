$(document).ready(function(){

	$('#exercise-form').on('submit', function(e){
		e.preventDefault();
		var name = $('#name-input').val();
		var age = $('#age-input').val();
		var height = $('#height-input').val();
		var obj = {name: name, age: age, height: height};
		var newRow, nameTd, ageTd, heightTd;
		/*
			remember our post route we set up on the server side
			as your see, when our form is submitted, we are storing all of our 
			values in an object, and then stringifying (research) this object
			in order for it to be accepted by your middleware and processed as 
			a json object on the server side. You see that we are sending that objected
			out by putting it in the data key of our ajax method. As you can see, there are other
			keys mentioned here besides method and post. These are meant to communicate with 
			your servier in order to let it know that you are sending over json. They need 
			to communicate like this or the object will come through as undefined.
			The bodyparser on the server side is what can translate this into json when sent through
		*/
		$.ajax({
			method: 'POST',
			url: '/second-post',
			data: JSON.stringify(obj),
			contentType: 'application/json',
			dataType: 'json',
			success: function(results){
				//when we are doing res.json(req.body) on the server side,
				//the results are what we are sending right back to the client
				//so we can see the results realtime, because we want this data
				//to be seen by the client right away
				//console.log(results)
				//then, append our items to the dom through jquery
				newRow = $('<tr>')
				nameTd = $('<td>',{
					class: 'name',
					text: results.name
				});
				ageTd = $('<td>',{
					class: 'age',
					text: results.age
				});
				heightTd = $('<td>',{
					class: 'height',
					text: results.height
				});
				newRow.append(nameTd).append(ageTd).append(heightTd);
				$('#tbody').append(newRow);

				$('#name-input').val("");
				$('#age-input').val("");
				$('#height-input').val("");
			}

		});
	});

	//remember our /getRoute on the server side
	//whatever we are sending through by res.json or res.send
	//is what is coming through as the callback, we we are defining as 'res'
	$.ajax({
		method: 'GET',
		url: '/getRoute'
	}).then(function(res){
		//console.log(res)
		//then, append our items to the dom through jquery
		var newRow, nameTd, ageTd, heightTd;
		for(var i = 0; i < res.length; i++){
			newRow = $('<tr>')
			nameTd = $('<td class="name">');
			ageTd = $('<td class="age">');
			heightTd = $('<td class="height">');

			nameTd.text(res[i].name);
			ageTd.text(res[i].age);
			heightTd.text(res[i].height);
			newRow.append(nameTd).append(ageTd).append(heightTd);
			$('#tbody').append(newRow)
		}
	});

});