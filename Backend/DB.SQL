CREATE DATABASE usa_el_nombre_a_tu_gusto;

CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT uuid(),
    nombre VARCHAR(20),
    matricula INT(10),
);