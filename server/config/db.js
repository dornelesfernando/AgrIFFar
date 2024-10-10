const mysql = require('mysql2');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'dbagriffar',
});

// Verifica a conexão com o banco de dados
db.getConnection((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados!');
});

module.exports = db;