//Encargado de realizar las operaciones en la BD

//Importar el modelo de datos para operar en la BD
const HabitacionModelo = require ('../models/HabitacionModelo.js')

//1. Funcion para insertar nombreHabitacion
async function insertarNombreHabitacion(datos){

    let habitacionNueva = new HabitacionModelo (datos)
    return await habitacionNueva.save()

}

//2. Funcion para insertar fotoHabitacion
async function insertarFotoHabitacion(datos){

    let habitacionFoto = new HabitacionModelo (datos)
    return await habitacionFoto.save()

}

//3. Funcion pora insertar descripcion
async function insertarDescripcion(datos){

    let habitacionDescripcion = new HabitacionModelo(datos)
    return await habitacionDescripcion.save()

}

//4.Funcion poara insertar precio adulto
async function insertarPrecioAdulto(datos){

    let habitacionPrecioAdulto = new HabitacionModelo(datos)
    return await habitacionPrecioAdulto.save()

}

//5.Funcion para insertar precio nino
async function insertarPrecioNino(datos){

    let habitacionPrecioNino = new HabitacionModelo(datos)
    return await habitacionPrecioNino.save()

}

//6. Funcion pora leer habitacion
async function leerHabitacion(id){

    let habitacionBuscada = await HabitacionModelo.findById(id)
    return habitacionBuscada

}

//7.Funcion para modificar habitacion
async function modificarHabitacion(id,datos){

    return await HabitacionModelo.findByIdAndUpdate(id,datos)

}

//8. Funcion para borrar habitacion
async function borrarHabitacion(id){

    return await HabitacionModelo.findByIdAndDelete(id)

}

module.exports ={
    insertarNombreHabitacion,
    insertarFotoHabitacion,
    insertarDescripcion,
    insertarPrecioAdulto,
    insertarPrecioNino,
    leerHabitacion,
    modificarHabitacion,
    borrarHabitacion
}