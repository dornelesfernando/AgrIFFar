const db = require('../config/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerUser = (req, res) => {
    const { name, phone, cpf, email, password } = req.body;
    
    db.query('SELECT * FROM farmer WHERE email = ?', [email], (err, result) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            return res.status(500).send({ message: 'Erro interno' });
        }

        if (result.length > 0) {
            return res.send({ message: 'Usuário já existe!' });
        } else {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                    console.error('Erro ao criptografar senha:', err);
                    return res.status(500).send({ message: 'Erro ao registrar o usuário' });
                }
                
                db.query(
                    'INSERT INTO farmer (name, phone, cpf, email, password) VALUES (?, ?, ?, ?, ?)',
                    [name, phone, cpf, email, hash],
                    (err, result) => {
                        if (err) {
                            console.error('Erro ao inserir usuário:', err);
                            return res.status(500).send({ message: 'Erro ao registrar o usuário' });
                        }
                        res.send({ message: 'Usuário registrado com sucesso!' });
                    }
                );
            });
        }
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM farmer WHERE email = ?', [email], (err, result) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            return res.status(500).send({ message: 'Erro interno' });
        }

        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, response) => {
                if (response) {
                    res.send({ message: 'Usuário logado!' });
                } else {
                    res.send({ message: 'Senha incorreta!' });
                }
            });
        } else {
            res.send({ message: 'Email não encontrado!' });
        }
    });
};

module.exports = { registerUser, loginUser };