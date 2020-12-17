// "require" is used to import from another file, and has other uses that you'll see soon

// importing the integer array that is being exported from the exportArray.js file
var importedArray = require('./exportArray.js');
// importing the object that is being exported from the exportObject.js file
var importedObject = require('./exportObject.js');
// importing the functions that are being exported from the exportFunctions.js file
var mathFunctions = require('./exportFunctions.js');

//logging the value of the imported array
//with some other logs to make the console print look proper
console.log("---------------------------")
console.log("Imported Array")
console.log("---------------------------")
console.log(importedArray);
console.log(" ")
//logging the value of the imported object
console.log("---------------------------")
console.log("Imported Object")
console.log("---------------------------")
console.log(importedObject);
console.log(" ")
//logging the values of the imported functions when called
console.log("---------------------------")
console.log("Imported Functions")
console.log("---------------------------")
console.log(mathFunctions.addNumbers(3000,687687686))
console.log(mathFunctions.subtractNumbers(2409284,24232))
console.log(" ")
