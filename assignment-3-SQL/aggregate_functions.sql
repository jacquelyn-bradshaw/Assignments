USE princesses;

-- A table showing the average age of the princesses rounded to the nearest whole number
SELECT
ROUND(AVG(p.age), 0)
FROM princesses p;

-- A table showing the date for the longest time since one of the films was last watched
SELECT
MIN(f.last_watched)
FROM films f;

-- A table showing the number of princesses by their age if the number of princesses for that age is greater than 1
SELECT p.age,
COUNT(p.age)
FROM princesses p
GROUP BY p.age
HAVING COUNT(p.age) > 1
ORDER BY p.age;

-- A table showing the result of counting the princesses owned
SELECT
COUNT(p_o.owned)
FROM princesses_owned p_o
GROUP BY p_o.owned
HAVING p_o.owned = 1;
