/*
  To start, we will be using 'postman' as our client in order to hit our api routes.
  We will be using our browser as our client soon.
*/

/* Modules needed for client communication */
const express = require("express");
const bodyParser = require("body-parser");

const looneyTunesCharacters = require('./looney_tunes_characters.js')

const app = express();

/*
  Body Parser is needed in order to parse data/information that is sent as a body from the client
  Body Parser is needed for POSTS, PUTS & DELETES
*/
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

/*
  GET REQUEST to send user's info from the server side to the client side
  Using express, the syntax for a "get" is using "app.get", like below
*/
app.get('/looney-tunes-characters', function(req, res){
  // sending user's info to the client
  res.json(looneyTunesCharacters)
})

app.get('/looney-tunes-characters/:character', function(req, res){
  let characterExists = false;
  let selectedCharacter;
  looneyTunesCharacters.forEach((character) => {
    const matchCharacterToParam = character.name.toLowerCase().split(" ").join("+");
    if(matchCharacterToParam === req.params.character.toLowerCase()){
      characterExists = true;
      selectedCharacter = character;
    }
  })

  let response;
  if(characterExists){
    // sending user's info to the client
    response = selectedCharacter;
  } else {
    response = {success: false};
  }

  res.json(response)
});

app.post("/looney-tunes-characters", function(req, res){
  if(req.body.name && req.body.species){
    looneyTunesCharacters.push(req.body);
    res.json({success: true, looneyTunesCharacters: looneyTunesCharacters})
  } else {
    res.json({success: false, message: "character addition unsuccessful"})
  }
})

app.put("/looney-tunes-characters/:character", function(req, res){
  let characterExists = false;
  const field_to_update = req.body.field_to_update;
  let selectedCharacter;
  looneyTunesCharacters.forEach((character) => {
    const matchCharacterToParam = character.name.toLowerCase().split(" ").join("+");
    if(matchCharacterToParam === req.params.character.toLowerCase()){
      characterExists = true;

      // remember this as being a way of being able to get and set an object's key value
      character[field_to_update] = req.body.updated_value
      selectedCharacter = character;
    }
  });

  let response;
  if(characterExists){
    // sending user's info to the client
    response = {success: true, message: "character updated", updatedCharacter: selectedCharacter};
  } else {
    response = {success: false, message: "update unsuccessful"};
  }

  res.json(response)
});

app.delete("/looney-tunes-characters/:character", function(req, res){
  let characterExists = false;
  let selectedCharacter;
  looneyTunesCharacters.forEach((character, index) => {
    const matchCharacterToParam = character.name.toLowerCase().split(" ").join("+");
    if(matchCharacterToParam === req.params.character.toLowerCase()){
      characterExists = true;
      looneyTunesCharacters.splice(index, 1);
    }
  })

  let response;
  if(characterExists){
    // sending user's info to the client
    response = {success: true, message: "character deleted", looneyTunesCharacters: looneyTunesCharacters};
  } else {
    response = {success: false, message: "deletion unsuccessful"};
  }

  res.json(response)
})

//telling your server to listen on this port, meaning your application will run on port 3000
//this is the file to you will run using 'node express.js' in order to start up your server and set up your application routes
//you can now access your page by going to 'http://localhost:3000/<whatever routes you set up>'
app.listen(3000, function(){
	console.log('Example app listening on port 3000!')
});
