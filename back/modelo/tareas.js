const mongoose = require('mongoose');
/*
    Con Shema, crearemos una estructura base de nuestra colección;
    definiendo campos y el tipo de dato de cada uno de ellos
*/
const Schema = mongoose.Schema;

// -- Creación de la instancia del objeto Shema --

var TareaSchema = new Schema({
    nombreEncargado: String,
    descripcionTarea: String,
    estadoTarea: String
});

// -- Exportar el Schema --
// mongoose.model('Nombre de la Coleccion',Shema)

module.exports = mongoose.model('Tarea', TareaSchema);