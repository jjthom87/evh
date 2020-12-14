$(document).ready(function(){

	/* Pokemon Fight Time */
	var ivyHp = 50;
	var squirtleHp = 50;

	var randomAttack;

	$("#ivy-hp").text(ivyHp);
	$("#squirtle-hp").text(squirtleHp);

	function nonRecurseFight(){
		randomAttack = Math.floor(Math.random() * 10);
		ivyHp -= randomAttack;
		$("#ivy-hp").text(ivyHp);
		$("#squirtle-attack-stats").append($("<p>").text("Squirtle attacked Ivysaur for " + randomAttack + " hit points."))

		randomAttack = Math.floor(Math.random() * 10);
		squirtleHp -= randomAttack;
		$("#squirtle-hp").text(squirtleHp);
		$("#ivy-attack-stats").append($("<p>").text("Ivysaur attacked Squirtle for " + randomAttack + " hit points."))


		if(squirtleHp <= 0 && ivyHp > 0){
			$(".fight-area").append($("<h1>").text("Ivysaur Wins"));
			$("#squirtle-img").attr("src", "./gifs/loser.gif");
			$("#ivysaur-img").attr("src", "./gifs/victory.gif");
		} else if (ivyHp <= 0 && squirtleHp > 0){
			$(".fight-area").append($("<h1>").text("Squirtle Wins"));
			$("#ivysaur-img").attr("src", "./gifs/loser.gif");
			$("#squirtle-img").attr("src", "./gifs/victory.gif");
		} else if (ivyHp <= 0 && squirtleHp <= 0) {
			$(".fight-area").append($("<h1>").text("Both Died"));
			$("#squirtle-img").attr("src", "./gifs/loser.gif");
			$("#ivysaur-img").attr("src", "./gifs/loser.gif");
		}
	}

	function recurseFight(){
		randomAttack = Math.floor(Math.random() * 10);
		ivyHp -= randomAttack;
		$("#ivy-hp").text(ivyHp);
		$("#squirtle-attack-stats").append($("<p>").text("Squirtle attacked Ivysaur for " + randomAttack + " hit points."))

		randomAttack = Math.floor(Math.random() * 10);
		squirtleHp -= randomAttack;
		$("#squirtle-hp").text(squirtleHp);
		$("#ivy-attack-stats").append($("<p>").text("Ivysaur attacked Squirtle for " + randomAttack + " hit points."))


		if(squirtleHp <= 0 && ivyHp > 0){
			$(".fight-area").append($("<h1>").text("Ivysaur Wins"));
			$("#squirtle-img").attr("src", "./gifs/loser.gif");
			$("#ivysaur-img").attr("src", "./gifs/victory.gif");
		} else if (ivyHp <= 0 && squirtleHp > 0){
			$(".fight-area").append($("<h1>").text("Squirtle Wins"));
			$("#ivysaur-img").attr("src", "./gifs/loser.gif");
			$("#squirtle-img").attr("src", "./gifs/victory.gif");
		} else if (ivyHp <= 0 && squirtleHp <= 0) {
			$(".fight-area").append($("<h1>").text("Both Died"));
			$("#squirtle-img").attr("src", "./gifs/loser.gif");
			$("#ivysaur-img").attr("src", "./gifs/loser.gif");
		} else {
			recurseFight();
		}
	}

	$("#fight-button").click(function(){
		recurseFight();
		//nonRecurseFight();
	});

});
