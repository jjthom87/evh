//import the array
var animalsArray = require("./animalArray.js");
//import the functions file
var functions = require("./functions.js");

//call all the functions and log the values
console.log("Printing all of the animals in the array")
functions.printAllAnimals(animalsArray);
console.log("New array with all of the animals that start with the letter B")
console.log(functions.returnAllAnimalsThatStartWithB(animalsArray));
console.log("New array with all of the animals that start with an input letter, in this case 'z'")
console.log(functions.returnAllAnimalsThatStartWithInputLetter(animalsArray, "z"));
console.log("New array with all of the animals that contain an input letter, in this case 'a'")
console.log(functions.returnAllAnimalsThatContainAnInputLetter(animalsArray, "a"))
console.log("New Array which contains the length of each string in the array")
console.log(functions.returnAllStringLengths(animalsArray))
