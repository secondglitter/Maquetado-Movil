import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
// import { Server } from 'socket.io';
// import { SerialPort } from 'serialport';
// import { DelimiterParser } from '@serialport/parser-delimiter';
import chalk from 'chalk';
import db from "./Connection/db.js"
import userRoutes from './Users/Routes/UserRoutes.js';
import authRoutes from './Auth/Routes/AuthRoutes.js';
import slotRoutes from './Slot/Routes/SlotRoutes.js';

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

/*const port = new SerialPort({
  path: '/dev/ttyUSB0',
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

  switch (ready) {
    case "Slot1":
        Slot1(ready);
      break;
  
    default:
      break;
  }
})

function Slot1(ready) {
  if(ready === "Ocupado") {
  const sql = "UPDATE slot_park SET occupied = 1 WHERE slot_name = 'Slot1'";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error al marcar el slot como ocupado:", err);
    } else {
      console.log("Slot1 marcado como ocupado en la base de datos");
    }
  })
  } else {
    const sql = "UPDATE slot_park SET occupied = 0 WHERE slot_name = 'Slot1'";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error al marcar el slot como desocupado:", err);
    } else {
      console.log("Slot1 marcado como desocupado en la base de datos");
    }
  })
  }
}

parser.on("error", (err) => {
  console.log("Error en la comunicación serial:", err);
}); */

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
