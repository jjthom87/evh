/*
  * Using MySql Developer
  1. Create these two tables
  2. Insert data into those tables
  You just need to copy and paste the create and inserts
  and then execute the queries in MySql Developer
*/
USE first_sql;
CREATE TABLE class_a (
  name VARCHAR(255),
  favorite_movie VARCHAR(255)
);
CREATE TABLE class_b (
  name VARCHAR(255),
  favorite_movie VARCHAR(255)
);

INSERT INTO class_a (name, favorite_movie) VALUES ('jay', 'shawshank redemption');
INSERT INTO class_a (name, favorite_movie) VALUES ('jane', 'jurassic park');
INSERT INTO class_a (name, favorite_movie) VALUES ('jim', 'meatballs');
INSERT INTO class_a (name, favorite_movie) VALUES ('jamie', '10 things i hate about you');
INSERT INTO class_a (name, favorite_movie) VALUES ('jill', 'shawshank redemption');
INSERT INTO class_a (name, favorite_movie) VALUES ('jack', 'the wedding singer');

INSERT INTO class_b (name, favorite_movie) VALUES ('joe', 'shawshank redemption');
INSERT INTO class_b (name, favorite_movie) VALUES ('phil', 'fast times at ridgemont high');
INSERT INTO class_b (name, favorite_movie) VALUES ('cindy', 'baseketball');
INSERT INTO class_b (name, favorite_movie) VALUES ('julia', 'the wedding singer');
INSERT INTO class_b (name, favorite_movie) VALUES ('cynthia', 'dracula 2000');
INSERT INTO class_b (name, favorite_movie) VALUES ('jon', 'jurassic park');

/*
  Using a sql join query
  Find all of the people between class_a & class_b
  Who have the same favorite movie
*/

/*
  Using a sql join query
  Find all of the people between class_a & class_b
  Who's same favorite movie is Shawshank Redemption
*/
