-- SELECT * FROM language

-- SELECT film.title, film.description, language.name
-- FROM film
-- INNER JOIN language
-- ON film.language_id=language.language_id

-- SELECT film.title, film.description, language.name
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id=language.language_id

-- CREATE TABLE new_film (
-- id SERIAL PRIMARY KEY,
-- name VARCHAR(100))

-- INSERT INTO new_film(name)
-- VALUES ('Die HARD'),('Titanic'),('Dune dune ban dun');

-- CREATE TABLE customer_review (
-- review_id SERIAL PRIMARY KEY,
-- film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
-- language_id INT REFERENCES language(language_id),
-- title VARCHAR(100),
-- score INT CHECK (score>=0 AND score<=10),
-- review_text VARCHAR,
-- last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

-- INSERT INTO customer_review(film_id,language_id,title,score,review_text)
-- SELECT 
-- (SELECT id FROM new_film WHERE name='Die HARD'),
-- (SELECT language_id FROM language WHERE name='Japanese'),
--  'Goblock about Die HARD',
--  9,
--  'I love that film, and my name is GOBLOCK';

-- INSERT INTO customer_review(film_id,language_id,title,score,review_text)
-- SELECT 
-- (SELECT id FROM new_film WHERE name='Titanic'),
-- (SELECT language_id FROM language WHERE name='Italian'),
--  'Italian Titanic is...',
--  8,
--  'HI MY NAME IS GOBLOCK, but now i am an italian guy';

-- DELETE FROM new_film WHERE name='Titanic'

-- SELECT * FROM customer_review

-- UPDATE film  
-- SET language_id=2
-- WHERE film_id=2
-- UPDATE film  
-- SET language_id=3
-- WHERE film_id=3
-- UPDATE film  
-- SET language_id=4
-- WHERE film_id=4

-- 2-->we use adrress id to know customer's address, and when we insert we use 
-- SELECT address_id FROM address


-- DROP TABLE customer_review <-- its ok, becouse 
-- customer_review is not a parent
-- for somebody, 0_0 he can die.

-- SELECT COUNT(*) FROM rental WHERE return_date IS NULL

-- SELECT film.title,film.rental_rate FROM film
-- INNER JOIN inventory
-- ON inventory.film_id=film.film_id
-- INNER JOIN rental
-- ON rental.inventory_id=inventory.film_id
-- WHERE return_date IS NULL
-- ORDER BY film.rental_rate DESC LIMIT 30

-- SELECT film.title 
-- FROM film 
-- INNER JOIN film_actor
-- ON film_actor.film_id = film.film_id
-- INNER JOIN actor
-- ON actor.actor_id = film_actor.actor_id
-- WHERE (film.description ILIKE '%sumo wrestler%')
-- and (actor.first_name='Penelope')
-- and (actor.last_name='Monroe')

-- SELECT film.title 
-- FROM film 
-- INNER JOIN film_category
-- ON film_category.film_id = film.film_id
-- INNER JOIN category
-- ON category.category_id = film_category.category_id
-- WHERE (film.length <60)
-- and (category.name='Documentary')
-- and (film.rating='R')

-- SELECT film.title 
-- FROM film 
-- INNER JOIN inventory
-- ON film.film_id = inventory.film_id
-- INNER JOIN rental
-- ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer
-- ON rental.customer_id = customer.customer_id
-- WHERE (customer.first_name='Matthew')
-- and (customer.last_name='Mahan')
-- and (film.rental_rate>4)
-- and (rental.return_date BETWEEN '2005/07/28' AND '2005/08/01')


-- SELECT film.*
-- FROM film 
-- INNER JOIN inventory
-- ON film.film_id = inventory.film_id
-- INNER JOIN rental
-- ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer
-- ON rental.customer_id = customer.customer_id
-- WHERE (customer.first_name='Matthew')
-- and (customer.last_name='Mahan')
-- and (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
-- ORDER BY film.replacement_cost DESC LIMIT 1