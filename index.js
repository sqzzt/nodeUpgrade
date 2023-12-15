const express = require('express')
const bodyParser = require('body-parser')
const clientesRouter = require('./routes/clientes.routes')
const obrasRouter = require('./routes/obras.routes')
const mongoose = require('mongoose');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoose.connect('',{
    
  })
  .then(() => console.log('Conectado a base de datos!'))
  .catch(err=> console.log('err'));

// importar producto routes
app.use('/obras',obrasRouter)

// importar usuario routes
app.use('/clientes',clientesRouter)

app.listen(3000)
