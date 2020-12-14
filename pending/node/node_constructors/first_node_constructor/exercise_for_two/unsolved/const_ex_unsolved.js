/*

1. Create a constructor as a student for a classroom, with a name as the arguments
2. For the student, create a function that takes in grades after tests and averages their grade
3. Print the grade and the average grade out after each test they've taken

*/

function Student(name){
	this.name = name;
	this.grade = process.argv[2];
	this.grades = process.argv.slice(2);
	this.total = 0;
	this.average = () => {
		this.grades.push(this.grade);
		this.grades.forEach((grade) => {
			this.total += parseInt(grade);
		})
		console.log(this.name + " has received an average of : " + (this.total)/(this.grades.length))
	}
	this.print = () => {
		this.grades.forEach((grade) => {
			this.total += parseInt(grade);
		})
		console.log(this.name + " has received an average of : " + (this.total)/(this.grades.length))
	}
}

var jared = new Student("Jared");

jared.print();