import mysql from 'mysql';
import dotenv from 'dotenv';
import chalk from 'chalk';

// Verificar que el proceso no esté en producción.
if(process.env.NODE !== 'production'){
    dotenv.config();
}

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.usuario,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

function printSuccess(message) {
    console.log(chalk.green(`✓ ${message}`));
}

function printError(message) {
    console.error(chalk.red(`✖ ${message}`));
}

connection.connect(function (error) {
    try {
        if (error) {
            printError(`Error al conectar a la base de datos: ${error}`);
        } else {
            printSuccess("¡Conexión a la base de datos establecida con éxito!");
        }
    } catch (error) {
        console.error(error);
    }
});

export default connection;
