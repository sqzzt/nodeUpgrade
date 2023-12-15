const express = require('express')
const router = express.Router()

const { buscarTodos, buscarPorId, crearObra, eliminarObra } = require('../controllers/obras.controller')

const { validarCrearObra } = require('../helpers/validadores')

router.get("/", async (req, res) => {
    try {
        const obras = await buscarTodos()
        res.json(obras)
    } catch (error) {
        // logging
        console.log(String(error))
        res.status(500).json({msg: "error interno "})
    }
   
})

router.get("/:id", async (req, res) => {
    try {
        const obraEncontrado = await buscarPorId(req.params.id)
        if (obraEncontrado) {
            res.json(obraEncontrado)
        }
        else {
            res.status(404).json({ msg: 'error: obra no encontado' })
        }
    } catch (error) {
        res.status(500).json({msg: 'error interno'+String(error)})
    }


})

router.post("/", async (req, res) => {
    await crearObra(
        req.body.clase.trim(),
        req.body.tipo.trim(),
        req.body.pisos.trim())
        


    res.json({ msg: 'Obra creada correctamente' })
})

router.delete("/:id", async (req, res) => {
    const obraBorrado = await eliminarObra(req.params.id)
    if (obraBorrado) {
        res.json({ msg: 'obra borrado!' })
    }
    else {
        res.json({ msg: 'error: obra no encontrada' })
    }
})

module.exports = router