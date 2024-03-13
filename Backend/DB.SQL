CREATE DATABASE usa_el_nombre_a_tu_gusto;

USE parkinslot;
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT UUID(),
    nombre VARCHAR(20),
    matricula INT(10)
);
