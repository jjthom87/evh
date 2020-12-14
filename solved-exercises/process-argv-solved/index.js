/*
  You'll be creating a command line app that will perform math
  It will take a math operator argument and 2 number arguments.
  The command line should look like this: "node index.js add 3 2" will add 3 and 2 and log the results

  Using process.argv
  - Make sure there are 3 arguments after "node index.js"
    You can use the length of the process.argv array
  - If there arent, log that and dont run the logic
  - The 3rd argument must be a string that is either:
    - add
    - subtract
    - multiply
    - divide
    If not, then log that and dont run the logic
  - The 4th and 5th arguments must be numbers
    If not, then log that and dont run the logic
  - If all of the arguments are correct (i made a function for this):
    - if the 3rd argument is 'add', then add the 2 numbers together and log it
    - if the 3rd argument is 'subtract', then subtract the 2 numbers together and log it
    - if the 3rd argument is 'multiply', then multiply the 2 numbers together and log it
    - if the 3rd argument is 'divide', divide the 2 numbers together and log it
*/
var mathActions = ['add', 'subtract', 'multiply', 'divide']

if(process.argv.length == 5){
  var argumentThree = process.argv[2];
  var argumentFour = parseInt(process.argv[3]);
  var argumentFive = parseInt(process.argv[4]);
  if(mathActions.indexOf(argumentThree) > -1 && Number.isInteger(argumentFour) && Number.isInteger(argumentFive)){
    performMath(argumentThree, argumentFour, argumentFive)
  } else {
    console.log("3rd argument must be a math operator command: add, subtract, multiply or divide");
    console.log("4th & 5th argument must be numbers");
  }
} else {
  console.log("Incorrect amount of arguments");
}

function performMath(operator,numOne, numTwo){
  if(operator == "add"){
    console.log(numOne + " + " + numTwo + " = " + (numOne + numTwo));
  } else if (operator == "subtract"){
    console.log(numOne + " - " + numTwo + " = " + (numOne - numTwo));
  } else if (operator == "multiply"){
    console.log(numOne + " x " + numTwo + " = " + (numOne * numTwo));
  } else {
    console.log(numOne + " / " + numTwo + " = " + (numOne/numTwo));
  }
}
