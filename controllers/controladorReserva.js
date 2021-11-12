//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

const { request, response } = require('express')

const {
    insertarNombreCliente,
    insertarApellidoCliente,
    insertarTelCliente,
    insertarFechaInicio,
    insertarFechaFinal,
    insertarNumeroPersonas,
    leerReserva,
    modificarReserva,
    borrarReserva} = require ('../services/servicioReservas')




//crear una funcion para cada operacion del servidor

async function registrarNombreCliente(peticion = request, respuesta = response) {


    let datosPeticion = peticion.body

    try {

        await insertarNombreCliente(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando el nombre del cliente"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}

async function registrarApellidoCliente(peticion = request, respuesta = response) {


    let datosPeticion = peticion.body

    try {

        await insertarApellidoCliente(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando el apellido del cliente"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

    

}

async function registrarTelCliente(peticion = request, respuesta = response) {


    let datosPeticion = peticion.body

    try {

        await insertarTelCliente(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando el telefono del cliente"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}

async function registrarFechaInicio(peticion = request, respuesta = response) {

    
    let datosPeticion = peticion.body

    try {

        await insertarFechaInicio(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando la fecha inicio del cliente"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}

async function registrarFechaFinal(peticion = request, respuesta = response) {

    

    let datosPeticion = peticion.body

    try {

        await insertarFechaFinal(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando la fecha final del cliente"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}

async function registrarNumeroPersonas(peticion = request, respuesta = response) {

   
    let datosPeticion = peticion.body

    try {

        await insertarNumeroPersonas(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando el numero de personas"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}

async function consultarReserva(peticion = request, respuesta = response) {

    
    let id= peticion.params.id

    try {

        // creamos una variable para almacenar lo que nos devuelve al leer el id 
        let reserva =await leerReserva(id)
        respuesta.status(200).json({
            estado:true,
            mensaje: reserva
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}


async function editarReserva(peticion = request, respuesta = response) {

     
    let id= peticion.params.id
    let datosPeticion = peticion.body

    try {

        await modificarReserva(id,datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito editando la reserva"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }
   
}

async function eliminarReserva(peticion = request, respuesta = response) {

    
    let id= peticion.params.id
   
    try {

        await borrarReserva(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito eliminando la reserva"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }
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