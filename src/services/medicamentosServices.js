/**Responsável pelo banco de dados */
const db = require('../db');

//requisição ao banco de dados
module.exports = {

    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM medicamento', (error, results) => {
                if(error) { 
                    rejeitado(error); 
                    return
                }
                aceito(results)
            });
        });
    },

    inserir: (medicamento_nome, medicamento_codigo_barras) => {
        return new Promise((aceito, rejeitado) => {

            db.query('INSERT INTO medicamento (medicamento_nome, medicamento_codigo_barras) VALUES (?, ?)', 
                [medicamento_nome, medicamento_codigo_barras],
                (error,results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
                }
            );
        });
    }
};

