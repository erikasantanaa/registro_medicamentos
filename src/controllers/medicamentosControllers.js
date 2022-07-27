//responsavel pelo controle da API

const medicamentosServices = require('../services/medicamentosServices');

module.exports = {
    buscartodos: async (req, res) => {
        let json = {error:'', result:[]};

        let medicamento = await medicamentosServices.buscartodos();

        for (let i in medicamento){
            json.result.push({
                codigo: medicamento[i].medicamento_codigo,
                nome: medicamento[i].medicamento_nome,
                codigo_barras: medicamento[i].medicamento_codigo_barras
            });
        };
        res.json(json)
    }
};