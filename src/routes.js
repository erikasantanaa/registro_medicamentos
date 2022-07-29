/** Caminho da api*/
const express = require('express');
const router = express.Router();

const medicamentosControllers = require('./controllers/medicamentosControllers');

router.get('/medicamento', medicamentosControllers.buscarTodos);
router.get('/medicamento/:medicamento_codigo', medicamentosControllers.pegarUm);
router.post('/medicamento', medicamentosControllers.inserir);
router.delete('/medicamento', medicamentosControllers.excluir);


module.exports = router