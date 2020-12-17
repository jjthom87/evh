//exporting a function and giving it a name of addNumbers
exports.addNumbers = (arg1, arg2) => {
	//this function is showing the addition of 2 numbers
	return arg1 + " + " + arg2 + " = " + (arg1 + arg2);
}

//exporting a function and giving it a name of subtractNumbers
exports.subtractNumbers = (arg1, arg2) => {
	//this function is showing the subtraction of 2 numbers
	return arg1 + " - " + arg2 + " = " + (arg1 - arg2);
}
