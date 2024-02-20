import express from 'express';
import userController from '../Controllers/UserController.js';

const router = express.Router();

router.get('/getAll', userController.getUsers);

export default router;