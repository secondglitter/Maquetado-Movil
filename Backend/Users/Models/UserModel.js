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

User.Register = async (req) => {
  const nombre = req.body.nombre;
  const matricula = parseInt(req.body.matricula);

  return new Promise((resolve, reject) => {
    const UsuarioRegistrado = "SELECT * FROM users WHERE nombre = ? AND matricula = ?";
    
    db.query(UsuarioRegistrado, [nombre, matricula], (error, results) => {
      if (error) {
        reject('Error al realizar la consulta de usuario registrado');
      } else {
        try {
          if (results.length > 0) {
            resolve('Este usuario ya existe');
          } else {
            const InsertarUsuario = 'INSERT INTO users (nombre, matricula) VALUES (?, ?)';
            
            db.query(InsertarUsuario, [nombre, matricula], (error, results) => {
              if (error) {
                reject('Error al registrar usuario');
              } else {
                resolve('Usuario registrado exitosamente');
              }
            });
          }
        } catch (error) {
          console.error(error);
          reject('Hubo un error');
        }
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