const Tarea = require('../modelo/tareas');

// -- Crear Tarea --

function crearTarea(req, res) {

    // Instanciar el modelo
    var tarea = new Tarea();

    // Traer los datos desde la cabecera http
    var parametros = req.body;

    // Guardaremos cada propiedad del Json de la petición en cada propiedad del modelo
    tarea.nombreEncargado = parametros.nombreEncargado;
    tarea.descripcionTarea = parametros.descripcionTarea;
    tarea.estadoTarea = parametros.estadoTarea;

    // Guardar en la BD
    // db.coleccion.insert()
    tarea.save((err, tareaNueva) => {
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!tareaNueva) {
                res.status(200).send({ message: "No fue posible realizar el registro" });
            } else {
                res.status(200).send({
                    message: "Tarea Registrada",
                    tarea: tareaNueva
                });
            }
        }
    });
}

// -- Obtener Tareas --

function obtenerTarea(req, res) {
    Tarea.find((err, tareasEncontradas) => {
        if (err) {
            res.status(500).send({ message: "Vale esa monda de servidor no funciona" })
        } else {
            if (!tareasEncontradas) {
                res.status(200).send({ message: "Vale esa monda no existe en la base" })
            } else {
                res.status(200).send({
                    message: "Tarea encontrada!",
                    tareas: tareasEncontradas
                });
            }
        }
    })
}

// -- Actualizar Tarea --
function actualizarTarea(req, res) {
    //Extraer el id de los parametros que viajarán por la url
    var tareaId = req.params.id;
    //Extraer los nuevos datos de la actualización de la tarea
    var nuevoDatoTarea = req.body;

    Tarea.findByIdAndUpdate(tareaId, nuevoDatoTarea, (err, tareaActualizada) => {
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!tareaActualizada) {
                res.status(200).send({ message: "No fue posible actualizar los datos" });
            } else {
                res.status(200).send({
                    message: "Tarea Actualizada",
                    tarea: nuevoDatoTarea
                });
            }
        }
    });
}

// -- Eliminar Tarea --

function eliminarTarea(req, res) {
    var tareaId = req.params.id;
    Tarea.findByIdAndDelete(tareaId, (err, tareaEliminada) => {
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (!tareaEliminada) {
                res.status(200).send({ message: "No fue posible eliminar la tarea" });
            } else {
                res.status(200).send({
                    message: "Tarea eliminada",
                    tarea: tareaEliminada
                });
            }
        }
    });
}

// -- Exportación de las funciones --

module.exports = {
    crearTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea
}