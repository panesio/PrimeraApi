const express = require('express');

// Importamos el archivo tareaControl

const TareaControl = require('../control/tareasControl');

// Router () de express que nos permite trabajar con los métodos http
//post (agregar), put (actualizar), get (obtener), delete (eliminar)
var api = express.Router(); //localhost:3000/api/...

// --Ruta Agregar Tarea --

api.post('/', TareaControl.crearTarea);

// -- Ruta Obtener Tarea --
api.get('/', TareaControl.obtenerTarea);

// -- Ruta Actualizar Tarea --
api.put('/:id', TareaControl.actualizarTarea);

// -- Ruta Eliminar Tarea --
api.delete('/:id', TareaControl.eliminarTarea);

// -- Ruta Exportar las Rutas --
module.exports = api;