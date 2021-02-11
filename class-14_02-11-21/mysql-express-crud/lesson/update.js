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

app.put('/dogs', function(req, res){
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

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
