const { Router } = require('express')
const rutas = Router();

//IMPORTO LOS CONTROLADORES

const {
    registrarNombreCliente,
    registrarApellidoCliente,
    registrarTelCliente,
    registrarFechaInicio,
    registrarFechaFinal,
    registrarNumeroPersonas,
    consultarReserva,
    editarReserva,
    eliminarReserva} = require ('../controllers/controladorReserva.js')


const {
    registrarNombreHabitacion,
    registrarFotoHabitacion,
    registrarDescripcion,
    registrarPrecioAdulto,
    registrarPrecioNino,
    consultarHabitacion,
    editarHabitacion,
    eliminarHabitacion} = require ('../controllers/controladorHabitacion.js')


rutas.post('/hotel/v1/cliente',registrarNombreCliente)
rutas.post('/hotel/v1/cliente',registrarApellidoCliente)
rutas.post('/hotel/v1/cliente',registrarTelCliente)
rutas.post('/hotel/v1/cliente',registrarFechaInicio)
rutas.post('/hotel/v1/cliente',registrarFechaFinal)
rutas.post('/hotel/v1/cliente',registrarNumeroPersonas)
rutas.get('/hotel/v1/cliente:id',consultarReserva)
rutas.put('/hotel/v1/cliente:id', editarReserva)
rutas.delete('/hotel/v1/cliente:id', eliminarReserva)

rutas.post('/hotel/v1/cliente',registrarNombreHabitacion)
rutas.post('/hotel/v1/cliente',registrarFotoHabitacion)
rutas.post('/hotel/v1/cliente',registrarDescripcion)
rutas.post('/hotel/v1/cliente',registrarPrecioAdulto)
rutas.post('/hotel/v1/cliente',registrarPrecioNino)
rutas.get('/hotel/v1/cliente:id', consultarHabitacion)
rutas.put('/hotel/v1/cliente:id', editarHabitacion)
rutas.delete('/hotel/v1/cliente:id', eliminarHabitacion)


module.exports = rutas