CREATE DATABASE usa_el_nombre_a_tu_gusto;

USE parkingslot;
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT UUID(),
    nombre VARCHAR(20),
    matricula VARCHAR(10)
);

CREATE TABLE slot_park (
    id CHAR(36) PRIMARY KEY DEFAULT UUID(),
    slot_id INT NOT NULL,
    occupied BOOLEAN,
    user_id CHAR(36), 
    start_time TIME,  
    end_time TIME,
    FOREIGN KEY (user_id) REFERENCES users(id),
    CHECK (start_time < end_time)
);
