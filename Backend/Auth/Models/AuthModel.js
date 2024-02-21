import db from '../../Connection/db.js';
import jwt from 'jsonwebtoken';

const Auth = {};

Auth.Login = (req) => {
    const nombre = req.body.nombre;
    const matricula = req.body.matricula;
    return new Promise((resolve, reject) => {
        const query = 'SELECT id FROM users WHERE nombre=? AND matricula=?';
        db.query(query, [nombre, matricula], (error, results) => {
            if (error) {
                console.log('Error al Loguear Usuario', error);
                reject('Error al loguear');
            } else {
                if (results.length === 0) {
                    reject('No se encontró ningún usuario');
                } else {
                    const payload = { id: results[0].id };
                    const token = jwt.sign(payload, 'secreto', { expiresIn: '24h' });
                    resolve({ message: 'Usuario Autenticado Correctamente', token: token });
                }
            }
        });
    });
};

export default Auth;
