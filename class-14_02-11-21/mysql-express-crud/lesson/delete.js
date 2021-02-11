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

app.delete('/dogs/breed', function(req, res){
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

app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
