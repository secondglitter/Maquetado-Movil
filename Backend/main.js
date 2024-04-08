import app from './Connection/app.js';
import userRoutes from './Users/Routes/UserRoutes.js';
import authRoutes from './Auth/Routes/AuthRoutes.js'
import slotRoutes from './Slot/Routes/SlotRoutes.js'
import chalk from 'chalk';

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/slot', slotRoutes);

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
app.listen(PORT, () => {
  
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