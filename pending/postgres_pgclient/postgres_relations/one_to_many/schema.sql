CREATE TABLE blog_post (
	id SERIAL PRIMARY KEY,
	post VARCHAR(255) NOT NULL,
	user_id INTEGER REFERENCES users(id)
);

INSERT INTO blog_post (post, user_id) VALUES ('lorde', 1);