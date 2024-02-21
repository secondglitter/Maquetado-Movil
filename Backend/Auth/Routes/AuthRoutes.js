import express from 'express';
import AuthController from '../Controllers/AuthController.js'
const router = express.Router();

// Acceder con Login
router.post('/Login', AuthController.Login)

export default router;