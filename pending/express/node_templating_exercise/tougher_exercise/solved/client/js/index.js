$(document).ready(function(){
	var picsDiv = $('<div>');
	picsDiv.addClass("dog-pics");

	var dogImgOne = $('<img class="dog-pic" data-name="puppy">');
	dogImgOne.attr('src', './images/puppy.jpg');
	dogImgOne.css('padding', '10px');

	var dogImgTwo = $('<img class="dog-pic" data-name="angry-pup">');
	dogImgTwo.attr('src', './images/AngryDog.jpg');
	dogImgTwo.css('padding', '10px');

	picsDiv.append(dogImgOne).append(dogImgTwo);
	$('div').eq(0).append(picsDiv);

	$(document).on('click', '.dog-pic', function(){
		var name = $(this).data('name');
		//console.log(name)

		//this is what is routing from the main page to the correct profile page
		//window.location.href is what represents the window that you are saying
		//you are re-assigning the value of that here
		//stack overflow it
		window.location.href = '/profile/' + name;
	})
})