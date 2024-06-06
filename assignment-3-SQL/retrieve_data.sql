USE princesses;

-- A table of all film names stored in the films table
SELECT f.name
FROM films f
ORDER BY f.name;

-- A table of princess names with an age of 16
SELECT p.name
FROM princesses p
WHERE p.age = 16
ORDER BY p.name;

/* A table of princess names, ages and second homes with an age greater than or equal to 16
and who have a second home ordered by descending age */
SELECT p.name, p.age, p.second_home
FROM princesses p
WHERE p.age >= 16
AND p.second_home IS NOT NULL
ORDER BY p.age DESC;

-- A table of film names that were last watched in March
SELECT f.name
FROM films f
WHERE f.last_watched
BETWEEN "2024-03-01" AND "2024-03-31"
ORDER BY f.name;

-- A table of princess names that start with an "A"
SELECT p.name
FROM princesses p
WHERE p.name
LIKE "A%"
ORDER BY p.name;

/* A table showing all films and when they were released and rereleased if they were released
or rereleased during or after 2010 */
SELECT f.name, year_released, year_rereleased
FROM films f
WHERE f.year_released >= 2010
OR f.year_rereleased >= 2010;
