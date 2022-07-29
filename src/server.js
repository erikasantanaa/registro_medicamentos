//servidor 

//caminho
require('dotenv').config({path:'variaveis.env'})

//exigindo as dependencias
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
//Routes ( rotas do projeto). Coloca todos em uso.
const routes = require('./routes')

//usando cors- api com dominios diferentes
const server = express()
server.use(cors())
server.use(bodyParser.urlencoded({extended: false}))
server.use('/api', routes);

//conectar o servidor com o banco de dados
server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})


