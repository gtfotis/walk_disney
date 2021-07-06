CREATE TABLE users (
    id serial PRIMARY KEY.
    first_name text NOT NULL,
    last_name text NOT NULL,
    user_email varchar(200) NOT NULL,
    user_password varchar(2000)
);


CREATE TABLE parks (
    id serial PRIMARY KEY,
    park_name text,
    park_description text

);

CREATE TABLE activities (
    id serial PRIMARY KEY,
    activity_name text NOT NULL,
    activity_description text,
    kid_friendly boolean DEFAULT false,
    activity_time varchar(200),
    park_id integer REFERENCES parks(id)
);

CREATE TABLE food (
    id serial PRIMARY KEY,
    restaurant_name text NOT NULL,
    cuisine text,
    price_range varchar(50),
    park_id integer REFERENCES parks(id)

);

CREATE TABLE lodging (
    id serial PRIMARY KEY,
    lodging_name text NOT NULL,
    lodging_url text,
    lodging_image text,
    park_id integer REFERENCES parks(id)

);

CREATE TABLE plan (
    id serial PRIMARY KEY,
    user_id integer REFERENCES users (id),
    parks_id integer REFERENCES parks(id),
    activity_id integer REFERENCES activities(id),
    food_id integer REFERENCES food(id),
    lodging_id integer REFERENCES lodging(id)
);