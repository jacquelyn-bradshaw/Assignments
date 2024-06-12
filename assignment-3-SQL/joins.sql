USE princesses;

-- A table showing all films data and their associated princesses data
SELECT f.name, f.year_released, f.year_rereleased, f.last_watched,
p.name, p.age, p.first_home, p.second_home, p.song
FROM films f
LEFT JOIN princesses p
ON f.princess_id = p.princess_id
ORDER BY f.name;

-- A table of princess names for princesses that are owned
SELECT p.name
FROM princesses p
INNER JOIN princesses_owned p_o
ON p.princess_id = p_o.princess_id
WHERE p_o.owned = 1
ORDER BY p.name;

/* A table of princess names, film names, and princess ages where the princess name is Aurora
or the film name is Tangled. This query could be used to find a favourite princess or a favourite film */
SELECT p.name, f.name, p.age
FROM princesses p
INNER JOIN films f
ON p.princess_id = f.princess_id
WHERE p.name = "Aurora"
OR f.name = "Tangled"
ORDER BY p.name, f.name;
