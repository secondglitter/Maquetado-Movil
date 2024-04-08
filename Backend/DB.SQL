CREATE DATABASE parkingslot;

USE parkingslot;
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT UUID(),
    nombre VARCHAR(20),
    matricula VARCHAR(10)
);

CREATE TABLE slot_park (
    id CHAR(36) PRIMARY KEY DEFAULT UUID(),
    slot_id CHAR(36) NOT NULL,
    occupied BOOLEAN,
    user_id CHAR(36), 
    start_time TIME,  
    end_time TIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (slot_id) REFERENCES slots(id),
    CHECK (start_time < end_time)
);

CREATE TABLE slots (
    id CHAR(36) PRIMARY KEY DEFAULT UUID(),
    slot_name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE test (
    id CHAR(36) PRIMARY KEY DEFAULT UUID(),
    texto VARCHAR(255)
);