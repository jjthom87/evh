$(document).ready(function(){

	$('#sign-in-form').on('submit', function(e){
		e.preventDefault();

		var signInObj = {
			username: $('#username-input').val(),
			password: $('#password-input').val()
		}

		$.ajax({
			method: /* which method? */,
			url: /* match it with the one made on the back end */,
			dataType: 'json',
			data: /* Put the data that you are sending through here */,
			contentType: 'application/json'
		}).then(function(res){
			/*
				1. If the res that is sent over is the incorrect password, then 
				alert the user incorrect password
				2. if the res is the user object, then use 'window.location.href='/api/profile/users-id'
			*/
		});

		$('#name-input').val("");
		$('#username-input').val("");
	});

});