const inquirer = require('inquirer');
const databaseConnection = require('./database_connection.js');

const userIsSignedIn = function(user) {
  const nameOfUser = user.name;

  inquirer.prompt([
    {
      type: "list",
      message: "Rock On " + nameOfUser,
      choices: ["View Your Music", "Buy Music", "View Your Balance", "Sign Out"],
      name: "sign_in_choice"
    }
  ]).then(function(signed_in){
    if(signed_in.sign_in_choice === "Buy Music"){
      databaseConnection.query("Select balance FROM bank where user_id=" + user.id, (balanceError, balanceRes) => {
        if(parseInt(balanceRes[0].balance) > 0){
          databaseConnection.query("SELECT songs.id FROM songs INNER JOIN bought_songs ON bought_songs.song_id=songs.id WHERE bought_songs.user_id=" + user.id, function(songErr, songRes){
            const boughtIds = songRes.map((song) => song.id)
            databaseConnection.query("SELECT * FROM songs", function(songTwoErr, songResTwo){
              const allSongIds = songResTwo.map((song) => song.id)
              //stack overflow
              const songIdsNotBought = allSongIds.filter(val => !boughtIds.includes(val));
              databaseConnection.query("SELECT * FROM songs WHERE id in (" + songIdsNotBought.join(",") + ")", function(songThreeErr, songThreeRes){
                var songs = [];
                for(var i = 0; i < songThreeRes.length; i++){
                  songs.push((i + 1) + ". " + songThreeRes[i].song_artist + ": " + songThreeRes[i].song_name + ", Price: $" + songThreeRes[i].price);
                }
                songs.push("Go Back")
                console.log(user.name + ", you have a balance of $" + balanceRes[0].balance)
                inquirer.prompt([
                  {
                    type: "list",
                    message: "Pick a song to buy",
                    choices: songs,
                    name: "song_choice"
                  }
                ]).then(function(songs){
                  if(songs.song_choice === "Go Back"){
                    userIsSignedIn(user);
                  } else {
                    databaseConnection.query("SELECT id FROM songs WHERE song_artist='" + songs.song_choice.split(":")[0].split(".")[1].trim() + "'", function(songErr, songRes){
                      if(songErr) throw songErr;
                      databaseConnection.query('INSERT INTO bought_songs (user_id, song_id) VALUES ('+user.id+', '+songRes[0].id+')', function(errFive, resFive){
                        console.log("Song Bought");
                      });
                      databaseConnection.query('UPDATE bank SET balance='+(parseInt(balanceRes[0].balance) - parseInt(songs.song_choice.split('$')[1]))+' WHERE user_id=' + user.id, (errSeven, resSeven) => {
                        console.log("Account Updated");
                        userIsSignedIn(user);
                      });
                    });
                  }
                });
              })
            })
          });
        } else {
          inquirer.prompt([
            {
              type: "input",
              message: "You currently have 0 balance. Please enter how much you would like to add to your account",
              name: "bank_add"
            }
          ]).then((bank_add_res) => {
            if(parseInt(bank_add_res.bank_add) > 2){
              databaseConnection.query("UPDATE bank SET balance="+parseInt(bank_add_res.bank_add)+" WHERE user_id=" + user.id, (errNine, resNine) => {
                if(errNine){
                  console.log(errNine);
                }
                console.log("$" + bank_add_res.bank_add + " added");
                userIsSignedIn(user);
              })
            } else {
              console.log("Please enter amount more than $2");
              userIsSignedIn(user);
            }
          });
        }
      });
    } else if (signed_in.sign_in_choice === "View Your Music") {
      databaseConnection.query('SELECT * FROM songs INNER JOIN bought_songs ON bought_songs.song_id=songs.id WHERE bought_songs.user_id=' + user.id, (errSix, resSix) => {
        for(var i = 0; i < resSix.length; i++){
          var obj = resSix[i];
          console.log((i + 1) + ". " + obj.song_artist + ": " + obj.song_name);
        }
        userIsSignedIn(user);
      });
    } else if (signed_in.sign_in_choice === "View Your Balance") {
      databaseConnection.query('SELECT balance FROM bank WHERE user_id=' + user.id, (bankErr, bankRes) => {
        console.log("Current Balance: " + bankRes[0].balance);
        userIsSignedIn(user);
      });
    } else {
      console.log("Later " + nameOfUser);
      databaseConnection.end();
    }
  });
}

module.exports = userIsSignedIn;
