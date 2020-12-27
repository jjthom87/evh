CREATE TABLE songs (
	id SERIAL PRIMARY KEY,
	song_artist VARCHAR(255) NOT NULL,
	song_name VARCHAR(255) NOT NULL,
	price INTEGER NOT NULL,
	lyrics VARCHAR(3000)
)

INSERT INTO songs (artist, title, price) VALUES ('Young MC', 'Bust A Move', 3);
INSERT INTO songs (artist, title, price) VALUES ('Beastie Boys', 'So What Cha Want', 3);
INSERT INTO songs (artist, title, price) VALUES ('Wild Cherry', 'Play That Funky Music', 3);