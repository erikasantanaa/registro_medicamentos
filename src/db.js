/**armazenar as informações e conectar ao banco de dados */
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

//conectar ao banco de dados pelo nome do banco
connection.connect((error) => {
    if (error) throw error;
    console.log(`conectado ao banco de dados: ${process.env.DB_NAME}`)
});

module.exports = connection

