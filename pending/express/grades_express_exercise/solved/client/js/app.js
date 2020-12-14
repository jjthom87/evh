$(document).ready(function(){

	//creating our form
	var formDiv = $("<div id='form-div'>");
	var form_header = $("<h3>");
	form_header.text("Add Student Grade here to change grade to average below");
	formDiv.append(form_header);
	var form = $("<form id='grade-form'>");
	var select = $("<select id='student-select'>");

	$(document).on('submit', '#form-div', function(e){
		e.preventDefault();

		$("#grades-table > tbody").empty();

		var student = $('#student-select').val();
		var grade = $('#grade-input').val();
		var obj = {name: student, grade: grade};
		var newRow, nameTd, gradeTd;
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
			url: '/grade-post',
			data: JSON.stringify(obj),
			contentType: 'application/json',
			dataType: 'json',
			success: function(results){
				//when we are doing res.json(grade_object) on the server side,
				//the results are what we are sending right back to the client
				//so we can see the results realtime, because we want this data
				//to be seen by the client right away
				//console.log(results)
				//then, append our items to the dom through jquery
				console.log(results)
				var newRow, nameTd, gradeTd;
				for(var i = 0; i < results.length; i++){
					newRow = $('<tr id="grades-tr">')
					nameTd = $('<td class="name">');
					gradeTd = $('<td class="grade">');

					nameTd.text(results[i].name);
					gradeTd.text(Math.ceil(parseInt(results[i].grade)));
					newRow.append(nameTd).append(gradeTd);
					$('#tbody').append(newRow)
				}
			}

		});
	});

	//remember our '/api/get-object' on the server side
	//whatever we are sending through by res.json or res.send
	//is what is coming through as the callback, we we are defining as 'res'
	$.ajax({
		method: 'GET',
		url: '/api/get-object'
	}).then(function(res){
		//console.log(res)
		var option;

		//adding option to my select element on my form...variables created above
		//then adding everything to the form div, then to the DOM
		res.forEach((student) => {
			option = $("<option>");
			option.attr('value', student.name);
			option.text(student.name);
			select.append(option);
		});
		var grade_input = $("<input>",{
			id: 'grade-input',
			type: 'text'
		});
		grade_input.width(40);
		var submit = $('<input>',{
			type: 'submit'
		});
		form.append(select).append("</br>").append(grade_input).append("</br>").append(submit);
		formDiv.append(form);
		$('div').eq(0).append(formDiv);


		//then, append our object to the table as well
		var newRow, nameTd, gradeTd;
		for(var i = 0; i < res.length; i++){
			newRow = $('<tr id="grades-tr">')
			nameTd = $('<td class="name">');
			gradeTd = $('<td class="grade">');

			nameTd.text(res[i].name);
			gradeTd.text(Math.ceil(parseInt(res[i].grade)));
			newRow.append(nameTd).append(gradeTd);
			$('#tbody').append(newRow)
		}
	});

});