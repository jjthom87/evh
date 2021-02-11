// setting up this client-side get to communicate with the get that we created on the server-side
// receiving the information that we're send to the client from the server
const populateDogsList = function(){
	$.ajax({
		method: 'GET',
		url: '/dogs',
		success:function(res){
			$(".dogs-list").empty();
			$(".dog-breed-select").empty();

			//populating a default option for the dogs dropdown
			var defaultOption = $("<option>");
			defaultOption.attr("selected", true).attr("disabled", true).attr("hidden", true)
			defaultOption.text("Select a Dog Breed");
			$(".dog-breed-select").append(defaultOption);

			res.data.forEach((dog) => {
				//populating dogs in the unordered list
				let dogBreedLi = $("<li>");
				dogBreedLi.text(dog.breed);
				$(".dogs-list").append(dogBreedLi);

				//populating dogs in the select dropdown
				let dogBreedOption = $("<option>");
				dogBreedOption.text(dog.breed);
				dogBreedOption.val(dog.breed);
				$(".dog-breed-select").append(dogBreedOption);
			})
		}
	});
}

populateDogsList();

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
			// console.log(res)
			if(res.success){
				$("#successful-post").text("Successful Addition of Dog Breed :)");
				// re-populate the dogs list on a successful post so the new dog can
				// show up on the ui
				populateDogsList();
				$(".post-breed-inputs").val("");
			} else {
				$("#successful-post").text("NO Luck Adding Dog Breed.")
				if(res.error.sqlMessage === "Column 'breed' cannot be null"){
					$("#error-message").text("Error: Can not leave 'Breed' input Empty")
				}
			}
		}
	});
});

$(".update-or-delete-select").on("change", function(e){
		$(".dynamic-inputs").empty();
    if(e.target.value == "update"){

		} else {
			let button = $("<button>");
			button.attr("id", "delete-dog-breed")
			button.text("Delete Dog Breed");
			$(".dynamic-inputs").append(button)
		}
});

$(document).on('click', "#delete-dog-breed", function(){
	const selectedDogBreed = $(".dog-breed-select").val();
	// setting up this client-side post to communicate with the post that we created on the server-side
	$.ajax({
		method: 'DELETE',
		url: '/dogs',
		data: JSON.stringify({breed: selectedDogBreed}),
		contentType: 'application/json',
		success:function(res){
			if(res.success){
				$("#successful-post").text("Successful Deletion of Dog Breed :)");
				// re-populate the dogs list on a successful post so the new dog can
				// show up on the ui
				populateDogsList();
				$(".post-breed-inputs").val("");
			} else {
				$("#successful-post").text("NO Luck Deleting Dog Breed.")
			}
		}
	});
});
