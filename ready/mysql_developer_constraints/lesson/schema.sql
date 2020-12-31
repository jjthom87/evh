/*
  SQL Constraints: https://www.w3schools.com/sql/sql_constraints.asp
*/
USE first_sql;

/*
  1. Creating a table named students
  2. Create a column called 'id'
    1. That will be an integer
    2. That will the unique identifier (primary) of the record
    3. That will automatically increment it's value to keep the record unique
    4. This record is auto created. You do not need to do an insert for this.
  3. Create a column called 'name'
    1. That has to be a string with a maximum of 255 characters
    2. That can not be a null value
    3. That must be a unique value, meaning there can not be a duplicate 'name' record in this table
  4. Create a column called 'age'
    1. That has to be an integer
    2. That must be not be a null value
*/
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL UNIQUE,
  age INT NOT NULL
);
/* Inserting a valid record to the table */
INSERT INTO students (name, age) VALUES ('JARED', 33);

/* Reading the students table from the database */
SELECT * FROM students;

/*
  Inserting an invalid record into the students table
  Age must be an integer. It is a string here.
*/
INSERT INTO students (name, age) VALUES ('Joe', 'whatever');

/*
  1. Creating a table called 'classes'
  2. Creating a column called 'id'
    1. That will be an integer
    2. That will the unique identifier (primary) of the record
    3. That will automatically increment it's value to keep the record unique
    4. This record is auto created. You do not need to do an insert for this.
  3. Creating a column called 'name':
    1. That has to be a string with a maximum of 255 characters
    2. can not be a null value
  4. Creating a column called 'StudentId'
    1. That must be an integer value
    2. That must not be a null value
  5. Creating a Foreign Key Constraint, which is a key used to link two tables together.
     In this case, we're linking the 'classes' table and the 'students' table by using the StudentId
     A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table, connecting the two tables
     In English, the Foreign Key is stating "This student is a member in this class"
*/
CREATE TABLE classes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  StudentId INT NOT NULL,
  FOREIGN KEY (StudentId) REFERENCES students(id)
);

/*
  If the id does not exist in the students table, the insert will be rejected

  A Student ID of 1 exists after we did our first insert into the students table,
  so the insert will be successful
*/
INSERT INTO classes (name, StudentId) VALUES ('Rock & Roll History', 1);
/*
  A Student ID of 2 does not exist in the students table,
  so the insert will be rejected
*/
INSERT INTO classes (name, StudentId) VALUES ('Rock & Roll History', 2);

/*
  Reading the records from the classes table
*/
SELECT * FROM classes
