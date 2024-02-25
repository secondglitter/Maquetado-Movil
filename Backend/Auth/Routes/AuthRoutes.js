import express from 'express';
import AuthController from '../Controllers/AuthController.js'
const router = express.Router();

// Acceder con Login
router.post('/Login', AuthController.Login)

// Decodificar el token. 
router.get('/Verify', AuthController.Verify);

export default router;