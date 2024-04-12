const express = require('express');
const coinRoutes = require('./Routes/coinroutes');
const usersRoutes = require('./Routes/usersroutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

// Usar las rutas definidas
app.use('/coin', coinRoutes);
app.use('/users', usersRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
 