USE princesses;

INSERT INTO films
(film_id, name, last_watched)
VALUES
("F1", "Snow White and the Seven Dwarfs", "2023-04-17"),
("F2", "Cinderella", "2023-12-20"),
("F3", "Sleeping Beauty", "2023-02-18"),
("F4", "The Little Mermaid", "2023-08-03"),
("F5", "Beauty and the Beast", "2023-11-07"),
("F6", "Aladdin", "2024-03-30"),
("F7", "Pocahontas", "2023-03-16"),
("F8", "Mulan", "2024-05-01"),
("F9", "The Princess and the Frog", "2023-09-30"),
("F10", "Tangled", "2023-09-30"),
("F11", "Brave", "2024-03-27"),
("F12", "Moana", "2024-01-11"),
("F13", "Raya and the Last Dragon", "2024-06-02");

INSERT INTO princesses
(name, film_id, age, 1st_home, 2nd_home, song)
VALUES
("Snow White", "F1", 14, "Cottage of the Seven Dwarfs", "The Queen's Castle", "I'm Wishing"),
("Cinderella", "F2", 19, "The Kings Castle", NULL, "A Dream Is a Wish Your Heart Makes"),
("Aurora", "F3", 16, "King Stefan's Castle", NULL, "I Wonder"),
("Ariel", "F4", 16, "King Triton's Palace", "Prince Eric's Castle", "Part of Your World"),
("Belle", "F5", 17, "Beast's Castle", NULL, "Belle"),
("Jasmine", "F6", 15, "The Sultan's Palace", NULL, "Speechless"),
("Pocahontas", "F7", 18, "Tribe Village", "Diving Cliff", "Just Around the Riverbend"),
("Mulan", "F8", 16, "Fa Family Temple", "Emperor's Palace", "Reflection"),
("Tiana", "F9", 19, "Tiana's Palace", NULL, "Almost There"),
("Rapunzel", "F10", 18, "Rapunzel's Tower", "Corona Castle", "When Will My Life Begin"),
("Merida", "F11", 16, "Castle DunBroch", NULL, "Touch the Sky"),
("Moana", "F12", 16, "Motunui", NULL, "How Far I'll Go"),
("Raya", "F13", 18, "Heart Palace", NULL, "Lead the Way");

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
