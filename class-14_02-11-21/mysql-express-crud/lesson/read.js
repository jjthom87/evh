const mysql = require('mysql');
const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);
databaseConnection.connect();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.get('/dogs', function(req, res){
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

app.get('/dogs/:breed', function(req, res){
  const dogBreed = req.params.breed.split("+").join(" ");
  const dogByBreedSelectQuery = "SELECT * FROM dog_breeds WHERE breed='"+dogBreed+"'";
  console.log("Select By Breed Query: " + dogByBreedSelectQuery);
  databaseConnection.query(dogByBreedSelectQuery, function(err, data){
    try {
      if(err){
        throw err
      }
      res.json({success: true, data: data})
    } catch (e) {
      res.json({success: false, error: e})
    }
  });
})

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
