/*
  In a many-to-many relationship, many records in a table can be associated with many records in another table
  We have already created a many-to-many relationship between the students table and the classes table

  A student has many classes
  Classes have many students
*/

/*
  Lets take a look at the records in our 'students' and 'classes' table
*/
SELECT * FROM students;
SELECT * FROM classes;

/*
  Lets insert some more records into the classes table
*/
INSERT INTO classes (name, StudentId) VALUES ('Anthropology', 2);
INSERT INTO classes (name, StudentId) VALUES ('Rock & Roll History', 3);
INSERT INTO classes (name, StudentId) VALUES ('Sociology', 2);
INSERT INTO classes (name, StudentId) VALUES ('Psychology', 3);

/*
  Lets do a join to get all of the classes that the student with an id of 1 is a part of
*/
SELECT classes.name FROM students
INNER JOIN classes
ON students.id=classes.StudentId
WHERE students.id=1;

/*
  Lets do a join to get all of the classes that the student with an id of 3 is a part of
*/
SELECT classes.name FROM students
INNER JOIN classes
ON students.id=classes.StudentId
WHERE students.id=3;

/*
  Lets do a join to get all of the students in the Anthropology class
*/
SELECT students.id, students.name FROM students
INNER JOIN classes
ON students.id=classes.StudentId
WHERE classes.name='Anthropology';
