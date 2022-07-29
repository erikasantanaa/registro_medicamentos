//responsavel pelo controle da API

// fazer o arquivo enchergar o arquivo carroService
const { json } = require('body-parser');
const medicamentosServices = require('../services/medicamentosServices');

//Criar funções

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error:'', result:[]}

        let medicamento = await medicamentosServices.buscarTodos();

        for(let i in medicamento) {
            json.result.push({
                medicamento_codigo: medicamento[i].medicamento_codigo,
                medicamento_nome: medicamento[i].medicamento_nome,
                medicamento_codigo_barras: medicamento[i].medicamento_codigo_barras
            })
        }
        res.json(json)
    },

    pegarUm: async (req, res) => {
        let json = { error:'', result:{}};

        let medicamento_codigo = req.params.medicamento_codigo;
        let medicamento_nome = await medicamentosServices.buscarUm(medicamento_codigo)

        if(medicamento_nome) {
            json.result = medicamento_nome;
        }
        res.json(json)
    },

    inserir: async (req, res) => {
        let json = { error:'', result:{}};

        let medicamento_nome = req.body.medicamento_nome;
        let medicamento_codigo_barras = req.body.medicamento_codigo_barras;
        
        if(medicamento_nome && medicamento_codigo_barras) {
            let medicamento_codigo = await medicamentosServices.inserir(medicamento_nome, medicamento_codigo_barras);
            json.result = {
                codigo: medicamento_codigo,
                medicamento_nome,
                medicamento_codigo_barras
            };
        } else {
            json.error = 'Os dois campos não foram enviados'
        }
        res.json(json)
    },

    excluir: async (req, res) => {
        let json = { error:'', result:{}};

        await medicamentosServices.excluir(req.params.medicamento_codigo)

        res.json(json);
    }
}