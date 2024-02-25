import db from '../../Connection/db.js';

const User = {};

User.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  });
};

User.Register = async(req) => {
  const nombre = req.body.nombre;
  const matricula = parseInt(req.body.matricula);

    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (nombre, matricula) VALUES (?, ?)';
        
        db.query(query, [nombre, matricula], (error, results) => {
            if (error) {
                reject('Error al registrar usuario');
            } else {
                resolve('Usuario registrado exitosamente');
            }
        });
    });
};

User.SearchUser = async(req) => {
  const id = req.params.id;

  return new Promise((resolve, reject) => {
    const query = 'SELECT nombre, matricula FROM users WHERE id = ?';

    db.query(query, [id], (error, results) => {
      if(error){
        reject('Error al buscar usuario');
      } else {
        resolve(results);
      }
    });
  });
};

User.DeleteUser = async (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (error, result) => {
      if (error) {
        reject('Error al eliminar usuario');
      } else {
        resolve(result);
      }
    });
  });
};

User.UpdateUser = async (req) => {
  const id = req.params.id
  const nombre = req.body.nombre
  const matricula = req.body.matricula
  return new Promise((resolve, reject) => {
    const query = 'UPDATE users SET nombre = ?, matricula = ? WHERE id = ?'
    db.query(query, [nombre, matricula, id], (error, result) => {
      if(error) {
        reject('Error al actualizar el usuario');
      } else {
        resolve('¡Usuario Actualizado exitosamente!')
      }
    })
  })
}

export default User;