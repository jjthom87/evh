/*

1. Create a constructor as a student for a classroom, with a name as the arguments
2. For the student, create a function that takes in grades after tests and averages their grade
3. Print the grade and the average grade out after each test they've taken

*/

function Student(name){
	this.name = name;
	this.total = 0;
	this.average = '';
	this.amountOfTests = 0;
	this.test = (grade) => {
		this.total += grade;
		this.amountOfTests++;
		this.average = this.total/this.amountOfTests;
		console.log("You received a grade of " + grade + ". Your class average is " + this.average);
	}
}

var joey = new Student("Joey");

joey.test(50);
joey.test(60);
joey.test(80);
joey.test(90);
joey.test(40);