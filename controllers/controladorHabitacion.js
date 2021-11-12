//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

const { request, response } = require('express')

const {
    insertarNombreHabitacion,
    insertarFotoHabitacion,
    insertarDescripcion,
    insertarPrecioAdulto,
    insertarPrecioNino,
    leerHabitacion,
    modificarHabitacion,
    borrarHabitacion   
    } = require ('../services/servicioHabitaciones.js')

//crear una funcion para cada operacion del servidor

async function registrarNombreHabitacion(peticion = request, respuesta = response) {

    

     let datosPeticion = peticion.body

     try {

        await insertarNombreHabitacion(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando el nombre de la habitacion"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

    // respuesta.json({
    //     mensaje: "estoy registrando una habitacion", 
    //})

}

async function registrarFotoHabitacion(peticion = request, respuesta = response) {


    let datosPeticion = peticion.body

    try {

        await insertarFotoHabitacion(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando la foto de la habitacion"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}

async function registrarDescripcion(peticion = request, respuesta = response) {


     let datosPeticion = peticion.body

     try {

        await insertarDescripcion(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando la foto de la habitacion"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}

async function registrarPrecioAdulto(peticion = request, respuesta = response) {


    let datosPeticion = peticion.body

    try {

        await insertarPrecioAdulto(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando el precio por adulto"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}

async function registrarPrecioNino(peticion = request, respuesta = response) {

    let datosPeticion = peticion.body

    try {

        await insertarPrecioNino(datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito registrando el precio por niño"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}

async function consultarHabitacion(peticion = request, respuesta = response) {

          
    let id= peticion.params.id

    try {

        // creamos una variable para almacenar lo que nos devuelve al leer el id 
        let habitacion =await leerHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            mensaje: habitacion
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }

}

async function editarHabitacion(peticion = request, respuesta = response) {

    
    let id= peticion.params.id
    let datosPeticion = peticion.body

    try {

        await modificarHabitacion(id,datosPeticion)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito editando la habitacion"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }
}

async function eliminarHabitacion(peticion = request, respuesta = response) {

     
    let id= peticion.params.id
    
    try {

        await borrarHabitacion(id)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Exito eliminando la habitacion"
        })
        
    } catch (error) {

        respuesta.status(400).json({
            estado:false,
            mensaje:"Upss ... tenemos problemas: " + error
        })
        
    }
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