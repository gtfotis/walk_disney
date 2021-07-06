INSERT INTO users 
    (first_name, last_name, user_email, user_password)
VALUES
    ('Mickey', 'Mouse', 'mickey@disney.com', 'password');

INSERT INTO parks
    (park_name, park_description)
VALUES
    ('Magic Kingdom Park', 'The most magical place on Earth! Magical Kingdom containes thrilling coasters and classic attractions.');

INSERT INTO activities
    (activity_name, activity_description, kid_friendly, activity_time, park_id)
VALUES 
    ('Happily Ever After', 'A grand finale to your day! The best fireworks display around.', true, '9:15', 1);

INSERT INTO food
    (restaurant_name, cuisine, price_range, park_id)
VALUES
    ('Aloha Isle', 'American', '$', 1);

INSERT INTO lodging
    (lodging_name, lodging_url, lodging_image, park_id)
VALUES
    ('The Cabins at Fort Wilderness Resort', 'https://disneyworld.disney.go.com/resorts/cabins-at-fort-wilderness-resort/rates-rooms/', '../imgs/wilderness_resort.jpeg', 1 );

INSERT INTO plan 
    (user_id, parks_id, activity_id, food_id, lodging_id)
VALUES 
    (1, 1, 1, 1, 1);


INSERT INTO activities 
    (activity_name, activity_description, kid_friendly, activity_time, park_id)
VALUES
    ('Haunted Mansion', 'A classic ride through a labyrinth of haunted chambers', true, '2:00', 1);

INSERT INTO food
    (restaurant_name, cuisine, price_range, park_id)
VALUES
    ('Cinderella''s Royal Table', 'Fine Dining', '$$$$', 1);

INSERT INTO plan
    (user_id, parks_id, activity_id, food_id)
VALUES
    (1, 1, 2, 2);