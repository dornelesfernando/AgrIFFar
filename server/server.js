const express = require('express');
const app = express();
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

// Iniciar server: node server.js

app.use(express.json());
app.use(cors());

app.post('register', (req, res) => {
    const { name, phone, cpf, email, password } = req.body;

    db.query(
        'SELECT * FROM users WHERE email = ?', [email], (err, result) => {
            if (err) {
                console.error('Erro ao verificar usuário:', err);
                res.status(500).send('Erro ao verificar usuário');
                return;
            }
            if (result.length > 0) {
                console.error('Usuário já cadastrado');
                res.status(409).send('Usuário já cadastrado');
                return;
            }
        }
    );
});

// Inicia o servidor na porta 5000
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});