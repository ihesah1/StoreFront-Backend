/* Replace with your SQL commands */
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    product_name VARCHAR(50)UNIQUE,
    price INT
)