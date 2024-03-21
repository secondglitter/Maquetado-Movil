import { Server } from 'socket.io';
import http from 'http';
import db from '../../Connection/db.js';

const server = http.createServer();
const io = new Server(server);

const View = async (socket) => {
    try {
        const results = await viewData();
        socket.emit('data', results);
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

const Create_Slot = async (socket, data) => {
    try {
        const { slot_id, occupied, user_id } = data;
        const message = await createSlot(slot_id, occupied, user_id);
        socket.emit('message', message);
    } catch (error) {
        console.error('Error al crear el slot:', error);
    }
}

io.on('connection', (socket) => {
    console.log('Cliente conectado via WebSocket.');

    socket.on('message', async (data) => {
        console.log('Mensaje recibido desde el cliente:', data);
        if (data.action === 'view') {
            View(socket);
        } else if (data.action === 'create') {
            Create_Slot(socket, data);
        }
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado desde WebSocket.');
    });
});

async function viewData() {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM slot_park";
        db.query(query, (error, results) => {
            if (error) {
                reject('Error en la query');
            } else {
                resolve(results);
            }
        });
    });
}

async function createSlot(slot_id, occupied, user_id) {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO slot_park (slot_id, occupied, user_id) VALUES (?, ?, ?)";
        db.query(query, [slot_id, occupied, user_id], (error, results) => {
            if (error) {
                reject('Error en la query');
            } else {
                resolve('Slot Creado Exitosamente');
            }
        });
    });
}

export default server;