CREATE DATABASE real_estate;

CREATE TABLE properties(
    property_id SERIAL,
    property_title VARCHAR(500) NOT NULL,
    property_description VARCHAR(500),
    property_address VARCHAR(500),
    property_country VARCHAR(250),
    property_price VARCHAR(250) NOT NULL,
    property_status VARCHAR(250) NOT NULL, 
    PRIMARY KEY (property_id)
);

CREATE TABLE property_images(
    property_id SERIAL,
    property_image_path VARCHAR(500) NOT NULL,
    FOREIGN KEY (property_id) REFERENCES properties(property_id)
);


/* property_status SALE, RENT, SOLD OUT, IN CONSTRUCTION */