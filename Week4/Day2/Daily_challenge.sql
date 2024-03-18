-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

-- SELECT * FROM FirstTab
-- it will give 4 items like above with NULL 'Avtaar' in the last one

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)
-- It will give 2 items 5 and is Null second one

-- SELECT * FROM SecondTab

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id 
-- NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- 0

-- SELECT COUNT(*) 
--    FROM FirstTab AS ft WHERE ft.id 
--    NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--    2

-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
--  0

--   SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id 
-- 	NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
-- 	2