var path = require('path');
var html_creator = require('../helpers/html_creator.js');

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
	})

	app.get('/profile/:id', (req,res) => {
		//this req.user object is created through req.login
		//this here is checking to see if there is a req.user in the req object
		//console.log(req.user)
		if(req.user){
			if(req.user.id == req.params.id){
				var userInfo = [];
				var query = `SELECT name FROM users WHERE id=${req.params.id}`;
				var profileArr = [];
				db.query(query, (error,queryRes) => {
					var userArr = [];
					if(error){
						res.json({error: error})
					} else {
						userArr.push(queryRes[0])
					}
					var profileQuery = `SELECT * FROM profile WHERE user_id=${req.params.id}`
					db.query(profileQuery, (profileError, profileRes) => {
						if(profileError){
							res.json({error: profileError})
						} else {
							console.log(profileRes[0])
							var data = {
								user: userArr[0],
								profile: profileRes[0]
							}
							res.set('Content-Type', 'text/html');
							res.send(html_creator(data));
						}
					})
				});
			} else {
				res.redirect('/');
			}
		} else {
			res.redirect('/')
		}
	});

	//logs out the user, and deletes the session from the req object and the database
	app.delete('/api/logout-user', function (req, res) {
	  req.session.destroy(function(out){
	    res.json({loggedOut: true})
	  });
	});

	app.post('/api/user-bio', function(req, res){
		let profileQueryString = "INSERT INTO profile (bio, picture_link, favorite_song, favorite_movie, favorite_pizza, user_id) VALUES ";
		profileQueryString += "(";
		profileQueryString += "'"+req.body.shortBio+"',"
		profileQueryString += "'"+req.body.pictureLink+"',"
		profileQueryString += "'"+req.body.song+"',"
		profileQueryString += "'"+req.body.movie+"',"
		profileQueryString += "'"+req.body.pizza+"',"
		profileQueryString += req.user.id
		profileQueryString += ")";
		db.query(profileQueryString, function(err, data){
			if(err){
				throw new Error(err)
			}
			res.json(req.user)
		})
	});
}
