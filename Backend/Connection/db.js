import mysql from 'mysql';
import dotenv from 'dotenv';

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

connection.connect(function (error) {
    try {
        if (error) {
            console.log(`Se ha detectado un error: ${error}`)
        } else {
            console.log("Conexión Exitosa")
        }
    } catch (error) {
        console.error(error);
    }
});

export default connection;