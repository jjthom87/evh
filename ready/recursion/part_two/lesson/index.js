let coinflipOptions = ["Heads", "Tails"]

//setting my game object, which just has a random coin flip option
var game = {
	randomCoinFlip: coinflipOptions[Math.floor(Math.random() * 2)]
}

//setting my player one object with name, attack and hp attributes
var fighterOne = {
	name: "Bo",
	attack: (Math.floor(Math.random() * 3)) + 4,
	hp: 25,
};

//setting my player two object with name, attack and hp attributes
//i have the randomCoinFlip only on player two because player two will be doing the coin flip every time
var fighterTwo = {
	name: "Jamie",
	attack: (Math.floor(Math.random() * 4)) + 5,
	hp: 22,
	randomCoinFlip: coinflipOptions[Math.floor(Math.random() * 2)]
};

//function called to run everything
//function calling other functions
let startFight = () => {
	logPlayerIntroductions(fighterOne.name, fighterTwo.name);
	logCoinFlip(fighterOne.name, fighterTwo.name, fighterTwo.randomCoinFlip, game.randomCoinFlip);
	if(game.randomCoinFlip == fighterTwo.randomCoinFlip){
		attackSequence(fighterTwo, fighterOne);
	} else {
		attackSequence(fighterOne, fighterTwo);
	}
}

//setting up functions for logging the game events

//logging the introduction of the players
let logPlayerIntroductions = (playerOneName, playerTwoName) => {
	console.log("Player One's name is " + playerOneName + " and has high hp");
	console.log("Player Two's name is " + playerTwoName + " and has high attack");
}

//logging the coin flip to decides who goes first
let logCoinFlip = (playerOneName, playerTwoName, playerChoice, computerChoice) => {
	console.log(playerTwoName + " guesses " + playerChoice);
	console.log("computer flips " + computerChoice);
	if(playerChoice == computerChoice){
		console.log(playerTwoName + " goes first")
	} else {
		console.log(playerOneName + " goes first")
	}
}

//logging the attack
let logAttack = (nameOne, nameTwo, attack) => {
	console.log(nameOne + " attacks " + nameTwo + " for " + attack + " damage");
}

//logging the health of the player after attack
let logHealth = (name, hp) => {
	if(hp > 0){
		console.log(name + " has " + hp + " hp left");
	} else {
		console.log(name + " has been beaten");
	}
}

//logging the winner of the game
let logWinner = (name) => {
	console.log(name + " Wins")
}

//running the game with this function
let attackSequence = (firstPlayer, secondPlayer) => {
	//resetting the random attack value for both players
	resetPlayerAttacks(firstPlayer, secondPlayer)

	//subtracting the second players hp by the first players attack
	secondPlayer.hp -= firstPlayer.attack;
	//logging function called to show status of attack
	logAttack(firstPlayer.name, secondPlayer.name, firstPlayer.attack)
	//logging function called to show status of player health after attack
	logHealth(secondPlayer.name, secondPlayer.hp)
	//checking if the second player still has hp
	if(secondPlayer.hp > 0){
		//subtracting the first players hp by the second players attack
		firstPlayer.hp -= secondPlayer.attack;
		//logging function called to show status of attack
		logAttack(secondPlayer.name, firstPlayer.name, secondPlayer.attack);
		//logging function called to show status of player health after attack
		logHealth(firstPlayer.name, firstPlayer.hp)
		if(firstPlayer.hp > 0){
			//recursion if both players hp is greater than 0 after checked
			attackSequence(firstPlayer, secondPlayer)
		} else {
			//logging that the second player won
			logWinner(secondPlayer.name)
		}
	//if the second player has 0 hp or less
	} else {
		//logging that the first player won
		logWinner(firstPlayer.name)
	}

}

let resetPlayerAttacks = (firstPlayer, secondPlayer) => {
	//resetting the random attack value for both players
	firstPlayer.attack = (Math.floor(Math.random() * 3)) + 4;
	secondPlayer.attack = (Math.floor(Math.random() * 4)) + 5;
}

//running the function to run the game
startFight();
