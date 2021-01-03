/*
  In a one-to-many relationship, one record in a table is associated with many records in another table, but not the other way around.
  We are going to create a one-to-many relationship between the coding_class table and the students table

  A coding class has many students
  A student has only one coding class
*/

/*
  Lets create our coding_class table

  Introducing another DataType called Double.
  It represents an integer that can possibly have a decimal

  Making StudentId Unique for this table because we can't insert a student id twice
*/
CREATE TABLE coding_class (
  id INT PRIMARY KEY AUTO_INCREMENT,
  grade_1 DOUBLE NOT NULL,
  grade_2 DOUBLE NOT NULL,
  StudentId INT NOT NULL UNIQUE,
  FOREIGN KEY (StudentId) REFERENCES students(id)
);

/*
  We have already created the students table
  Lets see all of the records in the students table
  and add a few more student records
*/
SELECT * FROM students;
INSERT INTO students (name, age) VALUES ('Bo', 34);
INSERT INTO students (name, age) VALUES ('Mary', 22);

/*
  Inserting records into the coding_class table
  When doing an insert into the coding_class table, make sure the student_id exists
*/
INSERT INTO coding_class (grade_1, grade_2, StudentId) VALUES (80.0, 72.2, 1);
INSERT INTO coding_class (grade_1, grade_2, StudentId) VALUES (99.0, 93.3, 2);
INSERT INTO coding_class (grade_1, grade_2, StudentId) VALUES (72.3, 61.8, 3);

/*
  Lets get all of the grade_1 grades for all of the students in the coding_class
*/
SELECT grade_1, StudentId from coding_class;
