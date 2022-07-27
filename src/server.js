//servidor  - OK

//caminho do arquivo variaveis.env
require('dotenv').config({ path:'variaveis.env'});

//exigindo as dependências
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//colocar a rota do projeto
const routes = require('./routes');

//usar cors- api com dominios diferentes
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
});




