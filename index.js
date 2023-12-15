const express = require('express')
const bodyParser = require('body-parser')
const clientesRouter = require('./routes/clientes.routes')
const obrasRouter = require('./routes/obras.routes')
const mongoose = require('mongoose');

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoose.connect('mongodb+srv://migueld2:fwSycuX12zXFNzbS@cluster0.rb6ymxp.mongodb.net/mbareformas',{
    
  })
  .then(() => console.log('Conectado a base de datos!'))
  .catch(err=> console.log('err'));

// importar producto routes
app.use('/obras',obrasRouter)

// importar usuario routes
app.use('/clientes',clientesRouter)

app.listen(3000)