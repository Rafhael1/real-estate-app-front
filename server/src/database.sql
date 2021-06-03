CREATE DATABASE real_estate;

create extension if not exists "uuid-ossp";

CREATE TABLE properties(
    property_id uuid DEFAULT uuid_generate_v4(),
    property_title VARCHAR(500) NOT NULL,
    
);