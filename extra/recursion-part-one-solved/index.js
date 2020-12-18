$(document).ready(function(){

	var animals = ["whale", "shark", "seal", "giraffe", "lion", "monkey", "lemur", "sloth", "gorilla", "hummingbird", "cat", "dog"]
	var only5Animals = [];

	/*
		Add 5 random animals from the animals array to another array using recursion
	*/
	function addOnlyFive(){
		if(only5Animals.length < 5){
			var randomIndex = Math.floor(Math.random() * animals.length);
			only5Animals.push(animals[randomIndex]);
			addOnlyFive();
		}
		return only5Animals;
	}

	/*
		Extra Challenge: Make sure no duplicates get added to the only5Animals Array
	*/
	function addOnlyFive2(){
		if(only5Animals.length < 5){
			var randomIndex = Math.floor(Math.random() * animals.length);
			if(only5Animals.indexOf(animals[randomIndex]) == -1){
				only5Animals.push(animals[randomIndex]);
			}
			addOnlyFive2();
		}
		return only5Animals;
	}

});