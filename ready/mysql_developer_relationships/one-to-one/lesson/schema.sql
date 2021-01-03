/*
  In a one-to-one relationship, one record in a table is associated with one and only one record in another table
  We are going to create a one-to-one relationship between the students table and the contact info table

  A contact info records holds information for one student
  A student only has one contact info record
*/

/*
  Lets create our contact_info table

  I'm adding the unique constraint because that student should be associated with
  only 1 record in the contact_info table
*/
CREATE TABLE contact_info (
  id INT PRIMARY KEY AUTO_INCREMENT,
  address VARCHAR(255) NOT NULL,
  emergency_contact_name VARCHAR(255) NOT NULL,
  emergency_contact_phone VARCHAR(255) NOT NULL,
  StudentId INT NOT NULL UNIQUE,
  FOREIGN KEY (StudentId) REFERENCES students(id)
);

/*
  We have already created the students table
  Lets see all of the records in the students table
*/
SELECT * FROM students;

/*
  Inserting a record into contact_info table
  When doing an insert into the contact_info table, make sure the student_id exists
*/
INSERT INTO contact_info (address, emergency_contact_name, emergency_contact_phone, StudentId) VALUES ('Strawberry Fields Drive', 'Penny Lane', '555-2324', 1);

/*
  If i try to do another insert for student id 1,
  i will get a 'Error Code: 1062. Duplicate entry '1' for key 'StudentId' error
*/
INSERT INTO contact_info (address, emergency_contact_name, emergency_contact_phone, StudentId) VALUES ('Our House', 'Tommy Tutone', '867-5309', 1);

/*
  Lets get the contact info record for the student with an id of 1
*/
SELECT * FROM contact_info WHERE StudentId=1;
