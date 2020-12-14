var Person = require('./constructor.js');

var jared = new Person("Jared", 30, "brown", "pootie tang");

jared.teach = function(student){
	console.log("Jared is teaching " + student);
}

console.log(jared);
jared.old();
jared.teach("Jarvis");
