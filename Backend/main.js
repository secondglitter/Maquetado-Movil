import app from './Connection/app.js';
import userRoutes from './Users/Routes/UserRoutes.js';

app.use('/users', userRoutes);

// Puerto de Escucha viene de la variable global.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Iniciado en el puerto ${PORT}`);
});