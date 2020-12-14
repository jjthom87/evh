/*

1. Create a pokemon constructor & an attacker instructor
   then make two pokemon. 
   One yours with the pokemon instructor, and another with  
   and battle the other one which is signifcantly weaker
2. Have your pokemon move up a level after it fights/defeats the other pokemon.
	(All you have to do is level up your pokemon in the fight function if you would like)
	(or, you can have them battle and let your pokemon win)
3. When it moves up a level, change it name to the leveled up version.

When making your pokemon attributes, you can have a choice..
You can either change their name when they level up, or set the character that they 
level up to within the constructor

*/

function Pokemon(name, next_level_name, attack, hp){
	this.name = name;
	this.next_level_name = next_level_name;
	this.attack = attack;
	this.hp = hp;
	this.level = 0;
	this.fight = () => {
		this.level++;
	},
	this.levelUp = () => {
		if(this.level == 1){
			this.name = this.next_level_name;
			console.log("You have leveled up to " + this.name + ". Total Awesomeness :)");
		} else {
			console.log("You are at level " + this.level + ". Bummer :(")
		}
	}
}

function Attacker(name, attack, hp){
	this.name = name;
	this.attack = attack;
	this.hp = hp;
}

var pikachu = new Pokemon("Pikachu", "Raichu", 50, 50);
var whatever = new Attacker("Helmuth", 1 , 1);

pikachu.fight();
pikachu.levelUp();

