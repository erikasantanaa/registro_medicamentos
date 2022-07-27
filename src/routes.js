/** Caminho da api*/
const express = require('express');
const router = express.Router();

const medicamentosControllers = require('./controllers/medicamentosControllers')

/** rotas do crud*/
router.get('/medicamento', medicamentosControllers.buscartodos)



module.exports = router