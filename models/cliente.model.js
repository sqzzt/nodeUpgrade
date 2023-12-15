const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    presupuesto: {
        type: Number,
        required: true,
    },
});



const Clientes = mongoose.model("clientes", clienteSchema);

module.exports = Clientes;