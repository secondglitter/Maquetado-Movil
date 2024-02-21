import express from 'express';
import userController from '../Controllers/UserController.js';

const router = express.Router();

// Obtener todos los usuarios.
router.get('/getAll', userController.getUsers);

// Obtener usuario por id.
router.get('/SearchUser/:id', userController.SearchUsers);

// Registrar a un usuarios.
router.post('/RegisterUser', userController.RegisterUsers);

// Actualizar un usuario por id.
router.put('/UpdateUser/:id', userController.UpdateUser);

// Borrar Usuario por id
router.delete('/DeleteUser/:id', userController.DeleteUser)


export default router;