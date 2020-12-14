//write a function that takes an array as an argument/parameter
//loops through the array
//and logs all of the items in the array
exports.printAllAnimals = (animalsArray) => {
  animalsArray.forEach((animal) => {
      console.log(animal)
  });
}

//write a function that takes an array as an argument/parameter
//returns a new array with all of the animals that start with the letter "b"
//im using filter
exports.returnAllAnimalsThatStartWithB = (animalsArray) => {
  return animalsArray.filter((animal) => animal.charAt(0) == "b");
}
//write a function that takes an array as an argument/parameter
//returns a new array with all of the animals that start with an input letter
//im using filter
exports.returnAllAnimalsThatStartWithInputLetter = (animalsArray, firstLetter) => {
  return animalsArray.filter((animal) => animal.charAt(0) == firstLetter);
}
//write a function that takes an array as an argument/parameter
//returns a new array with all of the animals that contain an input letter
//im using filter
exports.returnAllAnimalsThatContainAnInputLetter = (animalsArray, letter) => {
  return animalsArray.filter((animal) => animal.indexOf(letter) > -1)
}
//write a function that takes an array as an argument/parameter
//returns a new array with the lengths of all of the strings in the array
//im using map
exports.returnAllStringLengths = (animalsArray) => {
  return animalsArray.map((animal) => animal.length)
}
