const { validarCrearCliente } = require('../helpers/validadores');

function middlewareCrearCliente(req, res, next) {
    const resultadoValidacion = validarCrearCliente(req.body);

    if (resultadoValidacion.valido) {
        next();
    } else {
        res.status(400).json({ error: "Error de validación", mensaje: resultadoValidacion.mensaje });
    }
}

module.exports = {
    middlewareCrearCliente,
};