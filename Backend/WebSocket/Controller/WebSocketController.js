import WebSocket from "../Models/WebSocketModels.js";

const View = async (req, res) => {
    try {
        const pass = WebSocket.View();
        res.json(pass);
    } catch (error) {
        res.status(500).json({ mensaje: "Ha ocurrido un error al mostrar View" });
    }
}

export default {View}