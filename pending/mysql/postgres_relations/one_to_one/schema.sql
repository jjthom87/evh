USE whatever

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	username VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL
)

CREATE TABLE profile (
	id SERIAL PRIMARY KEY,
	fav_movie VARCHAR(255) NOT NULL,
	fav_song VARCHAR(255) NOT NULL,
	fav_pizza VARCHAR(255) NOT NULL,
	user_id INTEGER REFERENCES users(id)
);

INSERT INTO profile (fav_movie, fav_song, fav_pizza, user_id) VALUES ('The Other Guys', 'Rock On', 'Barbeque Chicken', 3)