
const Cliente = require('../models/cliente.model')

async function buscarTodos(){
    const cliente = await Cliente.find()
    return cliente
}

async function buscarPorId(id){
    const clienteEncontrado = await Cliente.findById(id)
    return clienteEncontrado
}

async function crearCliente(nombre,edad,pres){
    const nuevoCliente = new Cliente({
        nombre: nombre,
        edad: edad,
        presupuesto: pres
    })

    await nuevoCliente.save()

    return nuevoCliente
}

module.exports = {
    buscarTodos,
    buscarPorId,
    crearCliente,
}
