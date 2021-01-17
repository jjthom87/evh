USE first_sql;

/* Create another table that will detail people's nationality */
CREATE TABLE country_people (
  name VARCHAR(255),
  country_of_origin VARCHAR(255),
  primary_language VARCHAR(255)
);

/* Insert records into that table */
INSERT INTO country_people (name, country_of_origin, primary_language) VALUES ('George', 'Dominican Republic', 'Spanish');
INSERT INTO country_people (name, country_of_origin, primary_language) VALUES ('Robbie', 'Ethiopia', 'English');
INSERT INTO country_people (name, country_of_origin, primary_language) VALUES ('Ben', 'France', 'French');
INSERT INTO country_people (name, country_of_origin, primary_language) VALUES ('Paul', 'Germany', 'German');
INSERT INTO country_people (name, country_of_origin, primary_language) VALUES ('Ringo', 'Dominican Republic', 'English');
INSERT INTO country_people (name, country_of_origin, primary_language) VALUES ('John', 'Dominican Republic', 'Spanish');
INSERT INTO country_people (name, country_of_origin, primary_language) VALUES ('Pete', 'Spain', 'Spanish');
INSERT INTO country_people (name, country_of_origin, primary_language) VALUES ('Roger', 'Germany', 'English');
INSERT INTO country_people (name, country_of_origin, primary_language) VALUES ('Keith', 'Portugal', 'Portuguese');
INSERT INTO country_people (name, country_of_origin, primary_language) VALUES ('Josh', 'Brazil', 'Spanish');

/*
  Doing a join between the countries & country_people table
  that's returning the population of the country that the individual is from
*/
SELECT countries.name, country_people.name, countries.population
FROM country_people
INNER JOIN countries ON country_people.country_of_origin=countries.name;

/*
  Doing a join between the countries & country_people table
  that's only getting people from Dominican Republic and population information for the Dominican Republic
*/
SELECT countries.name, country_people.name, countries.population
FROM country_people
INNER JOIN countries ON country_people.country_of_origin=countries.name
WHERE countries.name='Dominican Republic';

/*
  Doing a join between the countries & country_people table
  that's only getting people from Dominican Republic who's primary language is Spanish
  and population information for the Dominican Republic
*/
SELECT countries.name, country_people.name, countries.population
FROM country_people
INNER JOIN countries ON country_people.country_of_origin=countries.name
WHERE countries.name='Dominican Republic'
AND country_people.primary_language='Spanish';
