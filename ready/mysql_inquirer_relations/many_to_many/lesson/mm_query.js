/*
	For this many to many lesson, we will be using the:
	a. 'performers' table
	b. 'performances' table
	c. 'performers_performances' table

	In our table, we already have:
		a. Elizabeth Shue, who is in the movies Karate Kid & Leaving Las Vegas
		b. Nicolas Cage, who is in the movies Con Air & Leaving Las Vegas

	Let's Insert Another performer (Tom Cruise) and Another Movie (Cocktail)
	Tom Cruise is in the movie Cocktail with Elizabeth Shue

	if you do not have these tables, please view this schema: https://github.com/ccny-ss-js-dec-2020/class-8_01-21-21/blob/master/pivot_tables/exercise/solved/schema.sql

	we're doing a lot of nesting here
	This is for the purpose of making sure one call finishes before we make another call
	There are better and more clean ways to do this
*/

//setup for connection database
const mysql = require('mysql');

//creating the connection to the database
const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);

//officially connecting to the mysql database
databaseConnection.connect();

function insertTomCruiseIntoPerformersTable(){
	databaseConnection.query("INSERT INTO performers (name) VALUES ('Tom Cruise')", function(err, res){
		try {
			if(err){
				throw new Error(err)
			}
			console.log(res)
		} catch (e){
			console.log("Error: " + e);
		}
	})
}
// insertTomCruiseIntoPerformersTable();

function insertCocktailIntoPerformancesTable(){
	databaseConnection.query("INSERT INTO performances (title, type) VALUES ('Cocktail', 'Movie')", function(err, res){
		try {
			if(err){
				throw new Error(err)
			}
			console.log(res)
		} catch (e){
			console.log("Error: " + e);
		}
	})
}
// insertCocktailIntoPerformancesTable();

function insertCockTailAndTomCruiseIntoJoinTable(){
	databaseConnection.query("SELECT * FROM performers WHERE name='Tom Cruise'", function(err, performer){
		try {
			if(err){
				throw new Error(err)
			}
			const performerId = performer[0].id;
			databaseConnection.query("SELECT * FROM performances WHERE title='Cocktail'", function(err, performance){
				try {
					if(err){
						throw new Error(err)
					}
					const performanceId = performance[0].id;
					databaseConnection.query("INSERT INTO performers_performances (performer_id, performance_id) VALUES ("+performerId+","+performanceId+")", function(err, res){
						try {
							if(err){
								throw new Error(err)
							}
							console.log(res);
						} catch (e) {
							console.log(e);
						}
					})
				} catch (e){
					console.log("Error: " + e);
				}
			})
		} catch (e){
			console.log("Error: " + e);
		}
	})
}
// insertCockTailAndTomCruiseIntoJoinTable();

function insertCockTailAndElizabethShueIntoJoinTable(){
	databaseConnection.query("SELECT * FROM performers WHERE name='Elizabeth Shue'", function(err, performer){
		try {
			if(err){
				throw new Error(err)
			}
			const performerId = performer[0].id;
			databaseConnection.query("SELECT * FROM performances WHERE title='Cocktail'", function(err, performance){
				try {
					if(err){
						throw new Error(err)
					}
					const performanceId = performance[0].id;
					databaseConnection.query("INSERT INTO performers_performances (performer_id, performance_id) VALUES ("+performerId+","+performanceId+")", function(err, res){
						try {
							if(err){
								throw new Error(err)
							}
							console.log(res);
						} catch (e) {
							console.log(e);
						}
					})
				} catch (e){
					console.log("Error: " + e);
				}
			})
		} catch (e){
			console.log("Error: " + e);
		}
	})
}
// insertCockTailAndElizabethShueIntoJoinTable()

function getAllPerformersInMovie(movieTitle){
	let selectQuery = "SELECT performers.name FROM performers_performances "
	selectQuery += "INNER JOIN performances "
  selectQuery += "INNER JOIN performers "
  selectQuery += "ON performers_performances.performance_id=performances.id "
  selectQuery += "AND performers_performances.performer_id=performers.id "
  selectQuery += "WHERE performances.title='"+movieTitle+"'";

	databaseConnection.query(selectQuery, function(err, data){
		try {
			if(err){
				throw new Error(err)
			}
			console.log("Data Retrieved!")
			console.log(data)
		} catch (e) {
			console.log(e)
		} finally {
			databaseConnection.end();
		}
	});
}
// get all performers from the movie Cocktail
// getAllPerformersInMovie("Cocktail")

// get all performers from the movie Leaving Las Vegas
getAllPerformersInMovie("Leaving Las Vegas")
