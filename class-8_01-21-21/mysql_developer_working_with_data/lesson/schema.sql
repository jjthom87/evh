/* Telling SQL Developer that this is the database that I want to interact with */
USE first_sql;

/* Reading all columns for all of the records from the countries table that was created for the imported csv file */
SELECT * FROM countries;

/* Reading only the country name and population columns for all of the records from the countries table  */
SELECT name, population FROM countries;

/* Reading all columns for the records from the countries table that have a subregion as 'Caribbean' */
SELECT * FROM countries WHERE subregion='Caribbean';

/* Reading all columns for the records from the countries table that have a subregion as 'Northern Africa' and a region as 'Africa' */
SELECT * FROM countries WHERE region='Africa' AND subregion='Northern Africa';

/* Reading all columns for the records from the countries table that have a subregion as 'Southern Asia' or a subregion as 'Western Asia' */
SELECT * FROM countries WHERE subregion='Southern Asia' OR subregion='Western Asia';

/* Reading all columns for the records from the countries table that have a name with the word Ireland contained in it */
SELECT * FROM countries WHERE name LIKE '%Ireland%';

/* Reading all columns for the records from the countries table that have a name that starts with the letter 'A' */
SELECT * FROM countries WHERE name LIKE 'A%';

/* Reading all columns for the records from the countries table that have a name that end with the letter 'e' */
SELECT * FROM countries WHERE name LIKE '%e';

/* Reading all columns for the records from the countries table that have a populationg greater than 100,000 */
SELECT * FROM countries WHERE population > 100000;

/* Reading all columns for the records from the countries table that have a populationg less than or equal to 510,713 */
SELECT * FROM countries WHERE population <= 510713;
