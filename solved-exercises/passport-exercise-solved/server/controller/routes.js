const path = require('path');
const databaseConnection = require('../config/database.js')

module.exports = (app, passport, db) => {
	/*
		Look for this route on the client side
		I am merely just checking to see if the user is logged in
		and then making a decision from there

		if(req.user) means "if req.user is not undefined"
	*/
	app.get('/api/sign-up', function(req,res){
		if(req.user){
			res.json({message: 'signed-in', user_id: req.user.id});
		}
	});

	/*
		Look for this route on the client side
		I am merely just checking to see if the user is logged in
		and then making a decision from there

		if(req.user) means "if req.user is not undefined"
	*/
	app.get('/api/sign-in', function(req,res){
		if(req.user){
			res.json({message: 'signed-in', user_id: req.user.id});
		}
	});

	//from the local-signup strategy above
	//as you can tell, instead of writing the sequel query in here, we write all of that
	//in the strategy above, and call that strategy here
	app.post('/api/sign-up', function(req,res,next){
		passport.authenticate('local-signup', function(err, user, info){
			if (err) {
				return next(err);
			} else {
				res.json({user: user, info: info})
			}
		})(req, res, next);
	});

	//from the local-signup strategy above
	//as you can tell, instead of writing the sequel query in here, we write all of that
	//in the strategy above, and call that strategy here
	app.post('/api/sign-in', function(req,res,next){
		passport.authenticate('local-signin', function(err, user, info){
		    if (err) {
		      	return next(err);
		    }
		    //if the user does not exist or the password entered does not match the password in the database
		    //then there is no user, and this message is sent to the client
		    if (!user) {
		    	return res.json({ success : false, message : 'authentication failed', info: info });
		    }
		    //if there is a user, then this req.login function, along with the serializing and deserializing above
		    //will create a req.user object to be used in your routes, and also create a record
		    //in the database under the sessions table
		    req.login(user, function(err){
				if(err){
					return next(err);
				}
				//also sending this response to the client
		      	return res.status(200).json({ success : true, message : 'authentication succeeded', object : user });
			});
	  	})(req, res, next);
	});

	app.get('/', function(req,res){
		res.sendFile(path.join(__dirname, '../../client/public/html/main_page.html'));
	});

	app.get('/sign-up', function(req,res){
		res.sendFile(path.join(__dirname, '../../client/public/html/sign_up.html'));
	});

	app.get('/sign-in', function(req,res){
		res.sendFile(path.join(__dirname, '../../client/public/html/sign_in.html'));
	});

	app.get('/api/signed-in', (req,res) => {
		//this req.user object is created through req.login
		//this here is checking to see if there is a req.user in the req object
		//console.log(req.user)
		if(req.user){
			res.json({message: 'signed-in', user_id: req.user.id});
		}
	});

	//logs out the user, and deletes the session from the req object and the database
	app.delete('/api/logout-user', function (req, res) {
	  req.session.destroy(function(out){
	    res.json({loggedOut: true})
	  });
	});

	// dog breed apis
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
				const dog = data[0]
				// instead of res.json, you can send over html
				let html = "<html>";
				html += '<head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></head>'
				html += "<body>";
				html += "<h1>" + dog.breed + "</h1>";
				html += "<h3>Origin: " + dog.origin + "</h3>";
				html += "<h3>Size: " + dog.size + "</h3>";
				html += "<h3>Average Life Span: " + dog.average_life_span + "</h3>";
				html += "<a class='btn btn-success' href='/'>Home</a>";
				html += "</body></html>";
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
	app.post('/dogs', function(req, res){
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

	app.delete('/dogs', function(req, res){
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

}
