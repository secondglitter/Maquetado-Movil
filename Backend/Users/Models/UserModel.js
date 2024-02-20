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

export default User;
