const { Router } = require('express')
const rutas = Router();

//IMPORTO LOS CONTROLADORES

const {registrarNombreCliente} = require ('../controllers/controladorReserva.js')
const {registrarApellidoCliente} = require ('../controllers/controladorReserva.js')
const {registrarTelCliente} = require ('../controllers/controladorReserva.js')
const {registrarFechaInicio} = require ('../controllers/controladorReserva.js')
const {registrarFechaFinal} = require ('../controllers/controladorReserva.js')
const {registrarNumeroPersonas} = require ('../controllers/controladorReserva.js')
const {consultarReserva} = require ('../controllers/controladorReserva.js')
const {editarReserva} = require ('../controllers/controladorReserva.js')
const {eliminarReserva} = require ('../controllers/controladorReserva.js')

const {registrarNombreHabitacion} = require ('../controllers/controladorHabitacion.js')
const {registrarFotoHabitacion} = require ('../controllers/controladorHabitacion.js')
const {registrarDescripcion} = require ('../controllers/controladorHabitacion.js')
const {registrarPrecioAdulto} = require ('../controllers/controladorHabitacion.js')
const {registrarPrecioNino} = require ('../controllers/controladorHabitacion.js')
const {consultarHabitacion} = require ('../controllers/controladorHabitacion.js')
const {editarHabitacion} = require ('../controllers/controladorHabitacion.js')
const {eliminarHabitacion} = require ('../controllers/controladorHabitacion.js')


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