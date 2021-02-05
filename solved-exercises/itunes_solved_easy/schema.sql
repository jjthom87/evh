CREATE DATABASE itunes;
USE itunes;

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	username VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE songs (
	id INT AUTO_INCREMENT PRIMARY KEY,
	song_artist VARCHAR(255) NOT NULL,
	song_name VARCHAR(255) NOT NULL
);

CREATE TABLE bought_songs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  song_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (song_id) REFERENCES songs(id)
);

/* My song list, you can choose songs of your own */
INSERT INTO songs (song_artist, song_name) VALUES ('School of Fish', 'Three Strange Days');
INSERT INTO songs (song_artist, song_name) VALUES ('Screaming Trees', 'Nearly Lost You');
INSERT INTO songs (song_artist, song_name) VALUES ('Soundgarden', 'Black Hole Sun');
INSERT INTO songs (song_artist, song_name) VALUES ('Live', 'I Alone');
INSERT INTO songs (song_artist, song_name) VALUES ('The Toadies', 'Possum Kingdom');
INSERT INTO songs (song_artist, song_name) VALUES ('Nirvana', 'Smells Like Teen Spirit');
INSERT INTO songs (song_artist, song_name) VALUES ('Pearl Jam', 'Alive');
INSERT INTO songs (song_artist, song_name) VALUES ('Stone Temple Pilots', 'Vasoline');
INSERT INTO songs (song_artist, song_name) VALUES ('Veruca Salt', 'All Hail Me');
INSERT INTO songs (song_artist, song_name) VALUES ('Alanis Morissette', 'You Oughta Know');
