$('#insert-dog-breed-form').on('submit', function(e){
	e.preventDefault();

	var dogBreedPostBody = {
		breed: $("#breed-input").val(),
		origin: $("#origin-input").val(),
		size: $("#size-input").val(),
		average_life_span: $("#average-life-span-input").val()
	};

	// setting up this client-side post to communicate with the post that we created on the server-side
	$.ajax({
		method: 'POST',
		url: '/dogs',
		data: JSON.stringify(dogBreedPostBody),
		contentType: 'application/json',
		success:function(res){
			$("#successful-post").empty();
			$("#error-message").empty();
			// this is the callback on the client side
			// this is where the response from the server will end up
			console.log(res)
			if(res.success){
				$("#successful-post").text("YES!")
			} else {
				$("#successful-post").text("NO :(")
				if(res.error.sqlMessage === "Column 'breed' cannot be null"){
					$("#error-message").text("Error: Can not leave 'Breed' input Empty")
				}
			}
		}
	})
});
