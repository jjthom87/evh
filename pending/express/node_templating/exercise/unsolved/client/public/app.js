$(document).ready(function(){

	$('#exercise-form').on('submit', function(e){
		e.preventDefault();
		var name = $('#name-input').val();
		var age = $('#age-input').val();
		var height = $('#height-input').val();
		var obj = {name: name, age: age, height: height};
		var newRow, nameTd, ageTd, heightTd;

		/*
			set up your ajax post route here
			within the ajax
			1. when submitting your data (i.e. data:), you will be using JSON.stringify(<your object>)
			2. contentType will be 'application/json' i.e. contentType: 'application/json'
			3. datType will be 'json' i.e. dataType: 'json',
		*/
		
	});

	/*
		set up your ajax get route here
	*/

});