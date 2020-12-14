/* recursion 1 */

//variables that will be parameter inputs for the functions below
var dataArray = [1,2,3,4,5,6,7,8,9,10];
var numOne = 0;

//creating a function
function recurseThis(num, arr){
	console.log("num: " + num);
	console.log(arr);

	//you must write logic if you're doing recursion
	//in order for the function to eventually end
	if(num < arr.length){
		//incrementing the number
		//eventually it will be equal to the length of the array
		num++
		//recursion happening here
		//calling the function inside of here in order to execute the logic
		recurseThis(num, arr);
	}

}
// calling the function here
// look at the console logs
// console.log(recurseThis(numOne, dataArray));

/* recursion 2 */
//https://stackoverflow.com/questions/10719480/javascript-return-of-recursive-function

//variables that will be parameter inputs for the functions below
var numTwo = 0;
var currentIndex = 0;

//creating a function
function addAllNumbers(num, arr, index){
	//writing logic in order for the recursion to know when it should end
	if(currentIndex < arr.length){
		console.log(num)
		//writing logic to re-assign the value of the num parameter
		num += arr[currentIndex]
		//incrementing the index parameter
		currentIndex++;
		//for recursion, this is how you return a value from the function
		//doing the recursion here
		return addAllNumbers(num, arr, index);
	} else {
		//when the index parameter value is equal to the length of the array
		//then return the value of the num parameter
		return num;
	}
}

//calling the function here
//look at the value returned
console.log(addAllNumbers(numTwo, dataArray, currentIndex));
