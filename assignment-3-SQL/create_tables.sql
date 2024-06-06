USE princesses;

CREATE TABLE films
(film_id VARCHAR(5) PRIMARY KEY,
name VARCHAR(50) NOT NULL,
last_watched DATE);

CREATE TABLE princesses
(princess_id INTEGER AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL UNIQUE,
film_id VARCHAR(5) NOT NULL,
age INTEGER CHECK(age > 0),
first_home VARCHAR(50) NOT NULL,
second_home VARCHAR(50),
song VARCHAR(50),
FOREIGN KEY(film_id) REFERENCES films(film_id)
);

CREATE TABLE princesses_owned
(princesses_owned_id VARCHAR(5) PRIMARY KEY,
princess_id INTEGER NOT NULL,
owned BOOLEAN NOT NULL,
date_owned DATE,
FOREIGN KEY(princess_id) REFERENCES princesses(princess_id)
);

ALTER TABLE films
ADD UNIQUE(name)
