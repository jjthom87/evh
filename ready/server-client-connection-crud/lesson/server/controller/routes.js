//importing dependencies
var express = require('express');
//you do not have to do npm i for this, as it is built into node
var path = require('path');

var mysql = require('mysql');
const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);
databaseConnection.connect();

//storing express.Router() in a variable
//which is built into express to store and export your routes
var router = express.Router();

//connecting your home route to an html file on the client side
//this will what you see at http://localhost:3000
//the connnection to an html page will always be a "get"
router.get('/', function(req,res){
	//research path & path.join on stack overflow
	//console.log(req)
	//console.log(dirname)
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

//connecting your contact page route to an html file on the client side
//this will what you see at http://localhost:3000/contact
//the connnection to an html page will always be a "get"
router.get('/contact', function(req,res){
	//research path & path.join on stack overflow
	//console.log(req)
	//console.log(dirname)
	res.sendFile(path.join(__dirname, '../../client/public/contact.html'));
});

router.get('/dogs', function(req, res){
  const allDogBreedsSelectQuery = "SELECT * FROM dog_breeds";
  databaseConnection.query(allDogBreedsSelectQuery, function(err, data){
    try {
      if(err){
        throw err
      }
      res.json({success: true, data: data})
    } catch (e) {
      res.json({success: false, error: e})
    }
  });
});

router.get('/dogs/:breed', function(req, res){
  const dogBreed = req.params.breed.split("+").join(" ");
  const dogByBreedSelectQuery = "SELECT * FROM dog_breeds WHERE breed='"+dogBreed+"'";
  console.log("Select By Breed Query: " + dogByBreedSelectQuery);
  databaseConnection.query(dogByBreedSelectQuery, function(err, data){
    try {
      if(err){
        throw err
      }
			const dog = data[0]
			// instead of res.json, you can send over html
			let html = "<html><body>";
			html += "<h1>" + dog.breed + "</h1>";
			html += "<h3>Origin: " + dog.origin + "</h3>";
			html += "<h3>Size: " + dog.size + "</h3>";
			html += "<h3>Average Life Span: " + dog.average_life_span + "</h3>";
			html += "</body></html>"
			res.send(html)
    } catch (e) {
			// we won't send an html error page just yet, lets learn the success part first
      res.json({success: false, error: e})
    }
  });
})

//this post route is connected to an event on the front end/client side
//whatever the client sends through will be the req.body
//we will be using our dog_breeds example from the last lesson
//instead of using postman, we'll be using the "Insert New Dog Breed" form from the front end
router.post('/dogs', function(req, res){
	let breed;
	if(req.body.breed === ""){
		breed = null
	} else {
		breed = "'"+req.body.breed+"'"
	}

  let insertDogBreedQuery = "INSERT INTO dog_breeds (breed, origin, size, average_life_span) VALUES ";
  insertDogBreedQuery += "(";
  insertDogBreedQuery += breed+",";
  insertDogBreedQuery += "'"+req.body.origin+"',";
  insertDogBreedQuery += "'"+req.body.size+"',";
  insertDogBreedQuery += "'"+req.body.average_life_span+"'";
  insertDogBreedQuery += ")";
  console.log("Insert Dog Breed Query: " + insertDogBreedQuery);
  databaseConnection.query(insertDogBreedQuery, function(err, data){
    try {
      if(err){
        throw err
      }
			// sending this response back to the client if this is successful
			// this response will end up in the callback of this post on the client side
      res.json({success: true, message: "Dog Breed added to database successfully"})
    } catch (e) {
			// sending this response back to the client if this is not successful
			// this response will end up in the callback of this post on the client side
      res.json({success: false, error: e})
    }
  });
});

router.put('/dogs', function(req, res){
  const column = req.body.column;
  const updated_value = req.body.updated_value;
  const breed = req.body.breed;
  let insertDogBreedQuery = "UPDATE dog_breeds SET "+column+"='"+updated_value+"' WHERE breed='"+breed+"'";
  console.log("Update Dog Breed Query: " + insertDogBreedQuery);
  databaseConnection.query(insertDogBreedQuery, function(err, data){
    try {
      if(err){
        throw err
      }
      const isUpdated = !data.message.includes("Rows matched: 0  Changed: 0  Warnings: 0");
      if(isUpdated){
        res.json({success: true, message: "Dog Breed Updated successfully"})
      } else {
        res.status(404).json({success: false, message: "No Update to Dog Breed"})
      }
    } catch (e) {
      res.json({success: false, error: e})
    }
  });
});

router.delete('/dogs', function(req, res){
  const breed = req.body.breed;
  let deleteDogBreedQuery = "DELETE FROM dog_breeds WHERE breed='"+breed+"'";
  console.log("Delete Dog Breed Query: " + deleteDogBreedQuery);
  databaseConnection.query(deleteDogBreedQuery, function(err, data){
    try {
      if(err){
        throw err
      }
      const isDeleted = data.affectedRows > 0;
      if(isDeleted){
        res.json({success: true, message: "The " + breed + " Dog Breed Deleted successfully"})
      } else {
        res.status(400).json({success: false, message: "The " + breed + " Dog Breed Deletion not Successful"})
      }
    } catch (e) {
      res.json({success: false, error: e})
    }
  });
});

//exporting routes to be imported in our server.js
module.exports = router;
