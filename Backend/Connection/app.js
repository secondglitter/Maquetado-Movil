import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Verificar que el proceso no esté en producción.
if(process.env.NODE !== 'production'){
    dotenv.config();
}

// Uso de Express
const app = express();
app.use(cors());
app.use(express.json());


export default app;
