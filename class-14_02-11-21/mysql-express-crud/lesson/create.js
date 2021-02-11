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

app.post('/dogs', function(req, res){
  let insertDogBreedQuery = "INSERT INTO dog_breeds (breed, origin, size, average_life_span) VALUES ";
  insertDogBreedQuery += "(";
  insertDogBreedQuery += "'"+req.body.breed+"',";
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
      res.json({success: true, message: "Dog Breed added to database successfully"})
    } catch (e) {
      res.json({success: false, error: e})
    }
  });
});

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
