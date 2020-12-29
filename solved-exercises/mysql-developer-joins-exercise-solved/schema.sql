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

SELECT class_a.name, class_b.name, class_a.favorite_movie
FROM class_a
INNER JOIN class_b
ON class_a.favorite_movie=class_b.favorite_movie;

SELECT class_a.name, class_b.name, class_a.favorite_movie
FROM class_a
INNER JOIN class_b
ON class_a.favorite_movie=class_b.favorite_movie
WHERE class_a.favorite_movie='shawshank redemption';
