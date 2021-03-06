// se importan utilidades de mongoose
const {model, Schema} = require('mongoose')

//creamos esquema de datos

const ReservaModelo = Schema ({

    nombre:{
        type: String,
        required: true
    },

    apellido:{
        type: String,
        required: true
    },

    telefono:{
        type: Number,
        required: true
    },

    fechaIncial:{
        type: Date,
        required: true
    },

    fechaFinal:{
        type: Date,
        required: true
    },

    numeroPersonas:{
        type: Number,
        required: true
    },





})

module.exports = model ('Reservas', ReservaModelo)