-- CREATE TABLE purchases (
-- id SERIAL PRIMARY KEY,
-- customer_id INT,
-- item_id INT,
-- quantity_purchased INT,
-- FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
-- FOREIGN KEY (item_id) REFERENCES items(item_id));

-- INSERT INTO purchases (customer_id,item_id,quantity_purchased)
-- VALUES(
-- (SELECT customer_id FROM customers WHERE customer_first_name='Scott'),
-- (SELECT item_id FROM items WHERE item_name='Fan'),1)

-- INSERT INTO purchases (customer_id,item_id,quantity_purchased)
-- VALUES(
-- (SELECT customer_id FROM customers WHERE customer_first_name='Melanie'),
-- (SELECT item_id FROM items WHERE item_name='Large Desk'),10)

-- INSERT INTO purchases (customer_id,item_id,quantity_purchased)
-- VALUES(
-- (SELECT customer_id FROM customers WHERE customer_first_name='Greg'),
-- (SELECT item_id FROM items WHERE item_name='Small Desk'),2)

-- SELECT purchases.*,customers.* FROM purchases
-- JOIN customers
-- ON purchases.customer_id=customers.customer_id
-- WHERE purchases.customer_id = 5

-- SELECT purchases.* FROM purchases
-- JOIN items
-- ON purchases.item_id = items.item_id
-- WHERE items.item_name = 'Large Desk' or items.item_name='Small Desk'

-- SELECT customers.customer_first_name,
-- customers.customer_last_name, items.item_name FROM customers
-- JOIN purchases
-- ON customers.customer_id=purchases.customer_id
-- JOIN items
-- ON purchases.item_id = items.item_id

-- INSERT INTO purchases (customer_id,quantity_purchased)
-- VALUES(
-- (SELECT customer_id FROM customers WHERE customer_first_name='Melanie'),10)

-- SELECT * FROM purchases
