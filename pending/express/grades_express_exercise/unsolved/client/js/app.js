$(document).ready(function(){

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
			1. create your ajax post route here, and connect it to the post route on the server side
			2. send over the object, and be sure to wrap JSON.stringify around it. Research on Stack Overflow: JSON.stringify
			3. as part of the ajax call: contentType: 'application/json' & dataType: 'json'
			4. As part of the callback, append the mutated object back to the table:
				* var newRow = $("<tr>"), var newTd = $("<td>"), newRow.append(newTd), $('#tbody').append(newRow)
				* make sure to append every item in the object to the table appropriately
				* Make sure to round the average grade to a whole number
		*/

	});



	/*

		1. Make sure to connect this route to the get route on the server side
		2. As part of the callback, append the object to the table:
			* var newRow = $("<tr>"), var newTd = $("<td>"), newRow.append(newTd), $('#tbody').append(newRow)
			* make sure to append every item in the object to the table appropriately
			* Make sure to round the average grade to a whole number
	*/


	$.ajax({
		method: 'GET',
		url: '/api/get-object'
	}).then(function(res){
		var option;

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

		var newRow, nameTd, gradeTd;
		/*
			append table to dom here
		*/
	});

});