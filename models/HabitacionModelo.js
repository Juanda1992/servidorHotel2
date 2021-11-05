// se importan utilidades de mongoose
const {model, Schema} = require('mongoose')

//creamos esquema de datos

const HabitacionModelo = Schema ({

    nombre:{
        type: String,
        required: true
    },

    fotografia:{
        type: String,
        required: true
    },

    descripcion:{
        type: String,
        required: true
    },


    


})

module.exports = model ('Habitaciones', HabitacionModelo)