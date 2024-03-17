-- SELECT count(*) FROM actors

-- INSERT INTO actors (first_name,number_oscars)
-- VALUES ('Nimbus', 3)

-- ERROR:  Failing row contains (6, Nimbus, null, null, 3).null value in column "last_name" of relation "actors" violates not-null constraint 
-- ERROR:  null value in column "last_name" of relation "actors" violates not-null constraint
-- SQL state: 23502
-- Detail: Failing row contains (6, Nimbus, null, null, 3).