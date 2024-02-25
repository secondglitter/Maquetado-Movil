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

Auth.Verify = (req) => {
    const token = req.body.token;
    const key = 'secreto';
    return new Promise((resolve, reject) => {
        try {
            const decode = jwt.verify(token, key);
            const query = 'SELECT * FROM users WHERE id = ?';
            db.query(query, [decode.id], (err, result) => {
                if (err) {
                    console.log('Error al leer datos del usuario', err);
                    reject('Error al leer datos del usuario');
                } else {
                    resolve(result);
                }
            });
        } catch (error) {
            console.log('Error al verificar el token', error);
            reject('Error al verificar el token');
        }
    });
};

export default Auth;