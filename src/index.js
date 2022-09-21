const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

const { bd } = require('./database');

// Configuración
app.set('puerto', process.env.PORT || 3000); 

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/productos', require('./producto.routes')); 

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')))

// Iniciar el servidor
app.listen(app.get('puerto'), () => {
    console.log(`Servidor en el puerto ${app.get('puerto')}`);
});


