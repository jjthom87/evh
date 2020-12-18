$(document).ready(function(){

	/* Pokemon Fight Time */
	var ivyHp = 50;
	var squirtleHp = 50;

	var randomAttack;

	$("#ivy-hp").text(ivyHp);
	$("#squirtle-hp").text(squirtleHp);

	function nonRecurseFight(){
		/*
			1. when the fight button is clicked
			2. reduce the value of both hp variables by using -= by a random number of up to 10
			3. display the attack and current hp results to the screen
			4. if one hp is less than or equal to 0 and the other is greater than 0
				- append an h1 tag of who the winner is to the fight area
				- replace the src of each picture with the appropriate gif
			5. if both hp's are less than or equal to 0
				- append an h1 tag of both died
				- replace the src of each picture with the loser gif
		*/
	}

	function recurseFight(){
		/*
			In this method:
				- If both characters hp is greater than 0
					- reduce ivysaurs hp by a random number up to 10
						- randomAttack will be the random number
						- use '-=' to reduce the hp and re-assign the value of the hp variable
						- display the value of the attack by appending it to attack stacks for squirtle
					- re-assign the random number
					- reduce squirtles hp by a random number up to 10
						- randomAttack will be the random number
						- use '-=' to reduce the hp and re-assign the value of the hp variable
						- display the value of the attack by appending it to attack stacks for ivysaur
					- if one hp is less than or equal to 0 and the other is greater than 0
						- append an h1 tag of who the winner is to the fight area
						- replace the src of each picture with the appropriate gif
					- if both hp's are less than or equal to 0
						- append an h1 tag of both died
						- replace the src of each picture with the loser gif
					- any other condition
						- run the recurseFight() function
		*/
	}

	$("#fight-button").click(function(){
		recurseFight();
		//or
		nonRecurseFight();
	});

});