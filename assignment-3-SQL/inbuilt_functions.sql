USE princesses;

-- A table showing a descriptive sentence for each princess using their first home and song
SELECT CONCAT_WS("", p.name, "'s home is ", p.first_home, " and their I wish song is ", p.song) AS princess_description
FROM princesses p;

-- A table showing when each film was last watched in a easier to read format
SELECT f.name,
DATE_FORMAT(f.last_watched, "%W %e %M %Y") AS last_watched
FROM films f;
