//import the array
var animalsArray = require("./animalArray.js");
//import the functions file
var functions = require("./functions.js");

//call all the functions and log the values
functions.printAllAnimals(animalsArray);
console.log(functions.returnAllAnimalsThatStartWithB(animalsArray));
console.log(functions.returnAllAnimalsThatStartWithInputLetter(animalsArray, "z"));
console.log(functions.returnAllAnimalsThatContainAnInputLetter(animalsArray, "a"))
console.log(functions.returnAllStringLengths(animalsArray))
