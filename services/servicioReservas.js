//Encargado de realizar las operaciones en la BD

// Importo el modelo de datos para poder operar en la BD
const ReservaModelo = require ('../models/ReservaModelo.js')

//1.Funcion insertar nombre cliente
async function insertarNombreCliente(datos){

    let reservaNombre = new ReservaModelo(datos)
    return await reservaNombre.save()

}

//2. Funcion insertar apellido cliente
async function insertarApellidoCliente(datos){

    let reservaApellido = new ReservaModelo(datos)
    return await reservaApellido.save()

}

//3. Funcion insertar Tel cliente
async function insertarTelCliente(datos){

    let reservaTel = new ReservaModelo (datos)
    return await reservaTel.save()

}

//4.Funcion insertar fechaInicio
async function insertarFechaInicio(datos){

    let reservaFechaInicio = new ReservaModelo (datos)
    return await reservaFechaInicio.save()

}

//5.Funcion insertar Fechafinal
async function insertarFechaFinal(datos){

    let reservaFechaFinal = new ReservaModelo (datos)
    return await reservaFechaFinal.save()

}

//6.Funcion fecha insertar NumeroPersonas
async function insertarNumeroPersonas(datos){

    let reservaNumeroPersonas = new ReservaModelo (datos)
    return await reservaNumeroPersonas.save()

}

//7.Funcion leer reserva
async function leerReserva(id){
    let reservaBuscada = await ReservaModelo.findById (id)
    return reservaBuscada

}

//8.Funcion para editar reserva
async function modificarReserva(id,datos){

    return await  ReservaModelo.findByIdAndUpdate(id,datos)

}

//9.Funcion para eliminar reserva
async function borrarReserva(id){
    
    return await ReservaModelo.findOneAndDelete(id)
}

module.exports ={
    insertarNombreCliente,
    insertarApellidoCliente,
    insertarTelCliente,
    insertarFechaInicio,
    insertarFechaFinal,
    insertarNumeroPersonas,
    leerReserva,
    modificarReserva,
    borrarReserva
}