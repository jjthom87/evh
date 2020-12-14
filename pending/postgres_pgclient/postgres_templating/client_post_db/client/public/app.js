$(document).ready(function(){

	$('#post-form').on('submit', function(e){
		e.preventDefault();

		var postObj = {
			name: $('#name-input').val(),
			username: $('#username-input').val(),
			password: $('#password-input').val()
		}

		$.ajax({
			method: 'POST',
			url: '/api/first-post',
			dataType: 'json',
			data: JSON.stringify(postObj),
			contentType: 'application/json'
		}).then(function(res){
			console.log(res)
			if(res.results === "successful"){
				alert("Username added succesfully")
			}
			if(res.error.constraint === "users_username_key"){
				alert("Username already taken. Please select another one")
			}
		});

		$('#name-input').val("");
		$('#username-input').val("");
		$('#password-input').val("");
	});

});