const Obra = require('../models/obra.model')

async function buscarTodos(){
    const obras = await Obra.find()
    return obras
}

async function buscarPorId(id){
    const obraEncontrada = await Obra.findById(id)
    return obraEncontrada
}
// 
async function crearObra(cla, tip, pis){
    const nuevaObra = new Obra({
        clase: cla,
        tipo: tip,
        pisos: pis,
    })

    await nuevaObra.save()

    return nuevaObra
}

async function eliminarObra(id){
    const obraBorrada = await Obra.findByIdAndDelete(id)
    return obraBorrada
}

async function modificarObra(id, cla, tip, pis){
    // importante, findByIdAndUpdate me devuelve el objeto antiguo (previo a la modificación)
   const obraModificar =  await Obra.findByIdAndUpdate(id, {clase: cla, tipo: tip, pisos: pis})
   return obraModificar
}

module.exports  = {
    buscarTodos,
    buscarPorId,
    crearObra,
    eliminarObra,
    modificarObra,
}