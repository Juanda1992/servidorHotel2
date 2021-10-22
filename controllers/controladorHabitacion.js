//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

const { request, response } = require('express')

//crear una funcion para cada operacion del servidor

function registrarNombreHabitacion(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    // let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando una habitacion",
        // datos:datosPeticion
    })

}

function registrarFotoHabitacion(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    // let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando una foto",
        // datos:datosPeticion
    })

}

function registrarDescripcion(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    // let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando una descripcion",
        // datos:datosPeticion
    })

}

function registrarPrecioAdulto(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    //let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando un precio adulto",
        //datos:datosPeticion
    })

}

function registrarPrecioNino(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    //let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando un precio nino",
       // datos:datosPeticion
    })

}

function consultarHabitacion(peticion = request, respuesta = response) {

    // RECIBIR EL ID A BUSCA            
        //let id= peticion.params.id

    respuesta.json({
        mensaje: "estoybuscando una habitacion " //+ id
    })

}

function editarHabitacion(peticion = request, respuesta = response) {

     // RECIBIR EL ID A EDITAR 
     //let id= peticion.params.id

    // let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy editando una habitacion"
    })

}

function eliminarHabitacion(peticion = request, respuesta = response) {

     // RECIBIR EL ID A ELIMINAR 
     //let id= peticion.params.id

    respuesta.json({
        mensaje: "estoy eliminando una habitacion"
    })

}

module.exports = {

    registrarNombreHabitacion,
    registrarFotoHabitacion,
    registrarDescripcion,
    registrarPrecioAdulto,
    registrarPrecioNino,
    consultarHabitacion,
    editarHabitacion,
    eliminarHabitacion
    
}

