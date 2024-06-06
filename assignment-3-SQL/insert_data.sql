USE princesses;

INSERT INTO princesses
(name, age, first_home, second_home, song)
VALUES
("Snow White", 14, "Cottage of the Seven Dwarfs", "The Queen's Castle", "I'm Wishing"),
("Cinderella", 19, "The Kings Castle", NULL, "A Dream Is a Wish Your Heart Makes"),
("Aurora", 16, "King Stefan's Castle", NULL, "I Wonder"),
("Ariel", 16, "King Triton's Palace", "Prince Eric's Castle", "Part of Your World"),
("Belle", 17, "Beast's Castle", NULL, "Belle"),
("Jasmine", 15, "The Sultan's Palace", NULL, "Speechless"),
("Pocahontas", 18, "Tribe Village", "Diving Cliff", "Just Around the Riverbend"),
("Mulan", 16, "Fa Family Temple", "Emperor's Palace", "Reflection"),
("Tiana", 19, "Tiana's Palace", NULL, "Almost There"),
("Rapunzel", 18, "Rapunzel's Tower", "Corona Castle", "When Will My Life Begin"),
("Merida", 16, "Castle DunBroch", NULL, "Touch the Sky"),
("Moana", 16, "Motunui", NULL, "How Far I'll Go"),
("Raya", 18, "Heart Palace", NULL, "Lead the Way");

INSERT INTO films
(film_id, name, princess_id, year_released, year_rereleased, last_watched)
VALUES
("F1", "Snow White and the Seven Dwarfs", 1, 1937, NULL, "2023-04-17"),
("F2", "Cinderella", 2, 1950, 2015, "2023-12-20"),
("F3", "Sleeping Beauty", 3, 1959, NULL, "2023-02-18"),
("F4", "The Little Mermaid", 4, 1989, 2023, "2023-08-03"),
("F5", "Beauty and the Beast", 5, 1991, 2017, "2023-11-07"),
("F6", "Aladdin", 6, 1992, 2019, "2024-03-30"),
("F7", "Pocahontas", 7, 1995, 1998, "2023-03-16"),
("F8", "Mulan", 8, 1998, 2020, "2024-05-01"),
("F9", "The Princess and the Frog", 9, 2009, NULL, "2023-09-30"),
("F10", "Tangled", 10, 2010, NULL, "2023-09-30"),
("F11", "Brave", 11, 2012, NULL, "2024-03-27"),
("F12", "Moana", 12, 2016, NULL, "2024-01-11"),
("F13", "Raya and the Last Dragon", 13, 2021, NULL, "2024-06-02"),
("F14", "Pocahontas II", 7, 2000, NULL, NULL),
("F15", "Mulan II", 8, 2014, NULL, NULL);

INSERT INTO princesses_owned
(princesses_owned_id, princess_id, owned, date_owned)
VALUES
("PO1", 1, 0, NULL),
("PO2", 2, 0, NULL),
("PO3", 3, 1, "2024-03-24"),
("PO4", 4, 0, NULL),
("PO5", 5, 0, NULL),
("PO6", 6, 0, NULL),
("PO7", 7, 0, NULL),
("PO8", 8, 0, NULL),
("PO9", 9, 0, NULL),
("PO10", 10, 1, "2023-12-25"),
("PO11", 11, 0, NULL),
("PO12", 12, 0, NULL),
("PO13", 13, 0, NULL);
