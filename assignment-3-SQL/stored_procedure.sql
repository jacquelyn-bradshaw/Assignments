USE princesses;

-- A stored procedure to change the date that a film stored in the films table was last watched
DELIMITER //

CREATE PROCEDURE change_date_last_watched(film_title VARCHAR(50), date_watched DATE)
BEGIN
  UPDATE films
  SET films.last_watched = date_watched
  WHERE films.name = film_title;
  END//

DELIMITER ;

/* Call the stored procedure change_date_last_watched with a stored film name followed by the
latest date it was watched */
CALL change_date_last_watched("Tangled", CURRENT_DATE());

-- To check that the date that the film was last watched has been updated
SELECT * FROM films;
