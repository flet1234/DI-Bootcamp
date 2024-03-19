-- CREATE TABLE product_orders (
-- order_id SERIAL PRIMARY KEY,
-- order_date DATE,
-- customer_name VARCHAR(100))

-- CREATE TABLE items (
-- items_id SERIAL PRIMARY KEY,
-- order_id INT REFERENCES product_orders(order_id),
-- item_name VARCHAR(50),
-- price DECIMAL (10,2))

-- INSERT INTO product_orders(order_date,customer_name)
-- VALUES ('2024-06-12','John'),('2023-07-11','Marina')

-- INSERT INTO items (order_id,item_name,price)
-- VALUES
-- 	((SELECT order_id FROM product_orders WHERE customer_name='John'),'Long table',10.00),
-- 	((SELECT order_id FROM product_orders WHERE customer_name='John'),'Car',54.50),
-- 	((SELECT order_id FROM product_orders WHERE customer_name='John'),'Bike',36.20),
-- 	((SELECT order_id FROM product_orders WHERE customer_name='Marina'),'Notebook',23.00),
-- 	((SELECT order_id FROM product_orders WHERE customer_name='Marina'),'Book',12.00);

-- CREATE FUNCTION order_sum(cust_name varchar)
-- RETURNS decimal AS $$
-- DECLARE
-- 	total_price decimal;
-- BEGIN
-- 	SELECT SUM(price) INTO total_price
-- 	FROM items
-- 	WHERE order_id IN 
-- 	 	(SELECT order_id FROM product_orders WHERE customer_name=cust_name);	
-- 	RETURN total_price;
-- END;
-- $$ LANGUAGE plpgsql;

-- SELECT * FROM order_sum('John')

-- SELECT price FROM items WHERE order_id IN 
-- (SELECT order_id FROM product_orders WHERE customer_name='John') 