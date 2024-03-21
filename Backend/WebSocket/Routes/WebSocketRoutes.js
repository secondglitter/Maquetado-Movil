import express from "express";
import expressWs from "express-ws";
import WebSocketController from "../Controller/WebSocketController.js";

const router = express.Router();
const { app } = expressWs(express());

// Ruta para manejar las solicitudes HTTP
router.get('/View', (req, res) => {
    res.status(400).json({ message: "WebSocket request is required." });
});

router.post('/CreateSlot', (req, res) => {
    res.status(400).json({ message: "WebSocket request is required." });
});

// Ruta para manejar las conexiones WebSocket
app.ws('/websocket', (ws, req) => {
    ws.on('message', (msg) => {
        try {
            const data = JSON.parse(msg);
            if (data.action === 'view') {
                WebSocketController.View(ws);
            } else if (data.action === 'create') {
                WebSocketController.Create_Slot(ws, data);
            }
        } catch (error) {
            console.error('Error al procesar el mensaje WebSocket:', error);
        }
    });

    ws.on('close', () => {
        console.log('Cliente WebSocket desconectado.');
    });
});

export default router;
