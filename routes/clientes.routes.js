const express = require('express')

const router = express.Router()

const { buscarPorId, buscarTodos, crearCliente, eliminarCliente } = require('../controllers/clientes.controller')
const { middlewareCrearCliente, } = require('../middlwares/cliente.middlwares')

router.get("/", async (req, res) => {
    try {
        const clientes = await buscarTodos()
        res.json(clientes)
    } catch (error) {
        res.status(500).json({ msg: "error interno en el servidor" })
    }

})

router.get("/:id", async (req, res) => {
    try {
        const clienteEncontrado = await buscarPorId(req.params.id)
        if (clienteEncontrado) {
            res.json(clienteEncontrado)
        }
        else {
            res.status(404).json({ msg: "error: cliente no encontado" })
        }
    } catch (error) {
        res.status(500).json({ msg: "error interno en el servidor" })
    }

})

router.post("/", middlewareCrearCliente, async (req, res) => {
    try {
        await crearCliente(req.body.nombre.trim(), req.body.edad, req.body.presupuesto)
        res.json({ msg: "cliente creado" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "error interno en el servidor" })
    }
})

router.delete("/:id", async (req, res) => {
    const clienteBorrado = await eliminarCliente(req.params.id)
    if (clienteBorrado) {
        res.json({ msg: 'cliente borrado!' })
    }
    else {
        res.json({ msg: 'error: cliente no encontrado' })
    }
})

module.exports = router