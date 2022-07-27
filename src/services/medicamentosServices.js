/**Responsável pelo banco de dados */

const db = require('../db');

//requisição ao banco de dados - pegar informações bd , ver no resttesttest
module.exports = {
    buscartodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM medicamento', (error, results) => {
                if(error) {
                    rejeitado(error);
                    return
                }
                aceito(results)
            })
        })
    }
};