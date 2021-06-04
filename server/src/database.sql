CREATE DATABASE real_estate;

CREATE TABLE properties(
    property_id SERIAL,
    property_title VARCHAR(500) NOT NULL,
    property_description VARCHAR(500),
    property_adress VARCHAR(500),
    property_country VARCHAR(250),
    property_price VARCHAR(250) NOT NULL,
    property_status VARCHAR(250) NOT NULL, /* SALE, RENT, SOLD OUT, IN CONSTRUCTION */
    PRIMARY KEY (property_id)
);