-- CREATE TABLE customer (
-- id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50),
-- last_name VARCHAR(50) NOT NULL);

-- CREATE TABLE customer_profile (
-- id SERIAL PRIMARY KEY,
-- isLogedIn BOOLEAN DEFAULT false,
-- customer_id INT REFERENCES customer(id));

-- INSERT INTO customer(first_name,last_name)
-- VALUES ('John','Doe'),('Jerome','Lalu'),('Lea','Rive');

-- INSERT INTO customer_profile(isLogedIn,customer_id)
-- VALUES (true,(SELECT id FROM customer WHERE first_name='John')),
-- (false,(SELECT id FROM customer WHERE first_name='Jerome'));

-- SELECT customer.first_name FROM customer
-- INNER JOIN customer_profile
-- ON customer_profile.customer_id = customer.id
-- WHERE customer_profile.isLogedIn = true


-- SELECT customer.first_name, customer_profile.isLogedIn FROM customer
-- FULL JOIN customer_profile
-- ON customer_profile.customer_id = customer.id

-- SELECT COUNT(customer.first_name) FROM customer
-- INNER JOIN customer_profile
-- ON customer_profile.customer_id = customer.id
-- WHERE customer_profile.isLogedIn = false

-- CREATE TABLE book (
-- book_id SERIAL PRIMARY KEY,
-- title VARCHAR NOT NULL,
-- author VARCHAR NOT NULL)

-- INSERT INTO book (title, author)
-- VALUES ('Alice In Wonderland','Lewis Carroll'),
-- 		('Harry Potter','J.K Rowling'), 
-- 		('To kill a mockingbird','Harper Lee');

-- CREATE TABLE student (
-- student_id SERIAL PRIMARY KEY,
-- name VARCHAR(100) NOT NULL UNIQUE,
-- age INT CHECK(age<=15))

-- INSERT INTO student (name,age)
-- VALUES ('John',12),('Lera',11),('Patrick',10),('Bob',14)

-- CREATE TABLE library (
-- book_fk_id INT REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- student_fk_id INT REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- borrowed_date DATE NOT NULL,
-- PRIMARY KEY (book_fk_id,student_fk_id));

-- INSERT INTO library (student_fk_id, book_fk_id,borrowed_date)
-- VALUES  
-- 		(
-- 		(SELECT student_id FROM student WHERE name='John'), 
-- 		(SELECT book_id FROM book WHERE title='Alice In Wonderland'),
-- 		'2022-02-15'
-- 		),
-- 		(
-- 		(SELECT student_id FROM student WHERE name='Bob'), 
-- 		(SELECT book_id FROM book WHERE title='To kill a mockingbird'),
-- 		'2021-03-03'
-- 		),
-- 		(
-- 		(SELECT student_id FROM student WHERE name='Lera'), 
-- 		(SELECT book_id FROM book WHERE title='Alice In Wonderland'),
-- 		'2021-05-23'
-- 		),
-- 		(
-- 		(SELECT student_id FROM student WHERE name='Bob'), 
-- 		(SELECT book_id FROM book WHERE title='Harry Potter'),
-- 		'2021-08-12'
-- 		);

-- SELECT * FROM library

-- SELECT student.name,book.title FROM library
-- INNER JOIN book
-- ON book.book_id =library.book_fk_id
-- INNER JOIN student
-- ON library.student_fk_id=student.student_id

-- SELECT avg(student.age) FROM library
-- INNER JOIN book
-- ON book.book_id =library.book_fk_id
-- INNER JOIN student
-- ON library.student_fk_id=student.student_id
-- WHERE book.title='Alice In Wonderland'

-- DELETE FROM student WHERE name='John'

-- SELECT * FROM library <--it was deleted info about student and borowwed book, becouse ON DELETE


