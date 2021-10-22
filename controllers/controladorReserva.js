//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

const { request, response } = require('express')

//crear una funcion para cada operacion del servidor

function registrarNombreCliente(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    // let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando un nombre",
        // datos:datosPeticion
    })

}

function registrarApellidoCliente(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    // let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando un apellido",
        // datos:datosPeticion
    })

}

function registrarTelCliente(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    // let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando un tel",
        // datos:datosPeticion
    })

}

function registrarFechaInicio(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    // let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando la Fecha de inicio",
    //     datos:datosPeticion
     })

}

function registrarFechaFinal(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    // let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando la fecha final",
        // datos:datosPeticion
    })

}

function registrarNumeroPersonas(peticion = request, respuesta = response) {

    //NOMBRE // EDAD // POSICION // DORSAL // EQUIPO

    // let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy registrando el numero de personas",
        // datos:datosPeticion
    })

}

function consultarReserva(peticion = request, respuesta = response) {

    // RECIBIR EL ID A BUSCAR 
    // let id= peticion.params.id

    respuesta.json({
        mensaje: "estoy buscando una consulta" // + id
    })

}


function editarReserva(peticion = request, respuesta = response) {

     // RECIBIR EL ID A EDITAR 
    //  let id= peticion.params.id

    //  let datosPeticion = peticion.body

    respuesta.json({
        mensaje: "estoy editando una reserva"
    })

}

function eliminarReserva(peticion = request, respuesta = response) {

     // RECIBIR EL ID A ELIMINAR 
    //  let id= peticion.params.id

    respuesta.json({
        mensaje: "estoy eliminando una reserva"
    })

}

module.exports = {

    registrarNombreCliente,
    registrarApellidoCliente,
    registrarTelCliente,
    registrarFechaInicio,
    registrarFechaFinal,
    registrarNumeroPersonas,
    consultarReserva,
    editarReserva,
    eliminarReserva
    
}
