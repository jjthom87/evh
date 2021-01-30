CREATE TABLE bought_products (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE products (
	id SERIAL PRIMARY KEY,
	product VARCHAR(255)
);

INSERT INTO products (product) VALUES ('Scotch');

INSERT INTO bought_products (user_id, product_id) VALUES (3,2);

SELECT products.product 
FROM products 
INNER JOIN bought_products 
ON bought_products.product_id=products.id 
WHERE bought_products.user_id=3