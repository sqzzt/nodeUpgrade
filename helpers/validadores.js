function validarCrearObra(body) {
    const { clase, tipo } = body;

    if (!clase || !clase.trim() || !tipo || !tipo.trim()) {
        return {
            valido: false,
            mensaje: "Falta clase o tipo",
        };
    } else {
        return {
            valido: true,
            mensaje: null,
        };
    }
}

function validarCrearCliente(body) {
    const { nombre } = body;

    if (!nombre || !nombre.trim()) {
        return {
            valido: false,
            mensaje: "Falta el nombre",
        };
    } else {
        return {
            valido: true,
            mensaje: null,
        };
    }
}

module.exports = {
    validarCrearObra,
    validarCrearCliente,
};