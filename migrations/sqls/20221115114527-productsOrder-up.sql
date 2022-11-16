/* Replace with your SQL commands */
CREATE TABLE products_order(
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE SET NULL,
    product_id INT REFERENCES products(id) ON DELETE SET NULL,
    quantity INT
)