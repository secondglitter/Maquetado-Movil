import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import { SerialPort } from 'serialport';
import { DelimiterParser } from '@serialport/parser-delimiter';
import chalk from 'chalk';
import db from "./Connection/db.js"
import userRoutes from './Users/Routes/UserRoutes.js';
import authRoutes from './Auth/Routes/AuthRoutes.js';
import slotRoutes from './Slot/Routes/SlotRoutes.js';
import { error } from 'console';

const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);

if(process.env.NODE !== 'production'){
  dotenv.config();
}



app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/slot', slotRoutes);

const port = new SerialPort({
  path: '/dev/ttyACM1',
  baudRate:9600
});
const parser = port.pipe(new DelimiterParser({ delimiter: '\r\n' }));

parser.on("open", () => {
  console.log("Conexión abierta con el puerto serial");
});

parser.on('data', (data) => {
  const decoder = new TextDecoder();
  const dataArray = new Uint8Array(data);
  const ready = decoder.decode(dataArray);
  console.log('Datos recibidos desde Arduino:', ready);

  function SlotDes(Slot){
    const query = "UPDATE slot_park SET occupied = 0, user_id = NULL WHERE slot_id = ?"
      db.query(query, [Slot], (error, data) => {
        if(error){
          console.error("Esto es un error", error);
        } else {
          console.log("Satisfactorio", data);
        }
      })
  }

  function SlotAct(Slot, id_usuario){
    const query = "UPDATE slot_park SET occupied = 1, user_id = ? WHERE slot_id = ?"
    db.query(query, [id_usuario, Slot], (error, data) => {
      if(error){
        console.error("Esto es un error", error);
      } else {
        console.log("Satisfactorio", data);
      }
    })
  }

  if(ready === "Slot 1 desocupado."){
    const Slot = "a1e3f5d8-9072-4c7f-a109-bd39a8e377f1";
    SlotDes(Slot);

  } else if( ready === "Slot 2 desocupado.") {
    const Slot = "fd64c95c-f1d1-44d4-bb53-3fa717f2446c";
    SlotDes(Slot);

  } else if (ready === "Slot 3 desocupado."){
    const Slot = "9b83e0a0-654c-4a95-b5ad-48a6cf684681";
    SlotDes(Slot);

  } else if (ready === "Slot 4 desocupado.") {
    const Slot = "1a2e0981-c650-4f02-b869-b36452c7ebee";
    SlotDes(Slot);

  } else if (ready === "Slot 5 desocupado.") {
    const Slot = "8e4e1e5c-fa9e-4b81-a5b1-51a2639d308b";
    SlotDes(Slot);

  } else if( ready === "Slot 1 ocupado por UID 93364f13"){
    const user_id = "551fea93-f9cd-11ee-9c0d-fdc6ea3f7ebb";
    const Slot = "a1e3f5d8-9072-4c7f-a109-bd39a8e377f1";
    SlotAct(Slot, user_id);

  } else if( ready === "Slot 2 ocupado por UID 8ed48314"){
      const user_id = "ca1e0270-fcfb-11ee-9995-f6a764fdcbfe";
      const Slot = "fd64c95c-f1d1-44d4-bb53-3fa717f2446c";
      SlotAct(Slot, user_id);
    
  } else if( ready === "Slot 3 ocupado por UID d3288c0f"){
      const user_id = "a7d0f377-fcfb-11ee-9995-f6a764fdcbfe";
      const Slot = "9b83e0a0-654c-4a95-b5ad-48a6cf684681";
      SlotAct(Slot, user_id);
  
  } else if( ready === "Slot 4 ocupado por UID 6381890f"){
      const user_id = "b8c5b5da-fcfb-11ee-9995-f6a764fdcbfe";
      const Slot = "1a2e0981-c650-4f02-b869-b36452c7ebee";
      SlotAct(Slot, user_id);  

  } else if( ready === "Slot 5 ocupado por UID 636bf2f4"){
      const user_id = "b8a47fc1-fcfd-11ee-9995-f6a764fdcbfe";
      const Slot = "8e4e1e5c-fa9e-4b81-a5b1-51a2639d308b";
      SlotAct(Slot, user_id);  

  } else {
    console.log("Todavia");
  }


});


parser.on("error", (err) => {
  console.log("Error en la comunicación serial:", err);
});

function obtenerRutas(router, prefix = '') {
  const routes = [];
  router.stack.forEach((middleware) => {
    if (middleware.route) {
      const path = middleware.route.path === '/' ? '' : middleware.route.path;
      const methods = Object.keys(middleware.route.methods).join(', ').toUpperCase();
      routes.push(`${prefix}${path} [${methods}]`);
    } else if (middleware.handle.stack) {
      routes.push(...obtenerRutas(middleware.handle, prefix + middleware.regexp));
    }
  });
  return routes;
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("");
  console.log(chalk.yellow('Rutas activas:'));
  console.log("");
  console.log(chalk.blue('Ruta de /users:'));
  console.log(obtenerRutas(userRoutes).map(route => chalk.blue(route)).join('\n'));
  console.log("");
  console.log(chalk.red('Ruta de /auth:'));
  console.log(obtenerRutas(authRoutes).map(route => chalk.red(route)).join('\n'));
  console.log("");
  console.log(chalk.white('Ruta de /slot:'));
  console.log(obtenerRutas(slotRoutes).map(route => chalk.white(route)).join('\n'));
  console.log("");
  console.log(chalk.green(`✓ Servidor Iniciado en el puerto ${PORT}`));
});
