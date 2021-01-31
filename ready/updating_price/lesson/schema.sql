CREATE TABLE consumers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  balance INT DEFAULT 100
);
INSERT INTO consumers (name, balance) VALUES ('George', 200);
