const mongoose = require('mongoose')

const Schema = mongoose.Schema

const obraSchema = new Schema({
    clase: {
        type: String,
        //required: true,
    },
    tipo:{
        type: String,
        required: true,
    },
    pisos:{
        type: Number,
        required: false,
    }
})

const Obras = mongoose.model("obras", obraSchema)

module.exports = Obras

