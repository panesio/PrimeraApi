/* 
    Este archivo va a coneteer
        -Lógica de express
        -Manejo de rutas, exportación del módulo y manejo de middlewares.
*/

const express = require('express');
const app = express();
const cors = require('cors');

// -- Declaración de rutas a ejecutar por express --
const tareaRutas = require('./rutas/tareasRutas')

// -- Inicio Middlewares --
app.use(express.json());
app.use(cors());

// -- Consumo de rutas --
app.use('/api', tareaRutas); // localhost:3000/api/

// -- Fin Middlewares --


// -- Exportación del módulo --

module.exports = app;