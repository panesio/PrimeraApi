/* 
    Este archivo tendrá la lógica de la conexión a la base de datos 
    y el levantamiento del servidor
*/

const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;

// -- Declaración URL Base de Datos --

const URI = 'mongodb://localhost:27017/listaTareas';

// -- Lógica Conexión y Servidor --
/* 
    El método connect de mongoose necesita como
    parámetros, la rta de la BD y una función 
    con respuesta y un error
*/
mongoose.connect(URI, (error, rta) => {
    if (error) {
        console.log(`El error es: ${error}`);
    } else {
        console.log(`Conexión exitosa`);
        app.listen(port, () => {
            console.log(`Puerto: ${port}`)
        });
    }

});

// Abrimos la consola y ejecutamos npm start
// Vamos al navegador y ejecutamos localhost: con el puerto que le especificamos