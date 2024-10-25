const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const secret = 'seuSegredoJWT'; // Use um segredo forte e mantenha-o seguro

// Função para registrar o usuário
const registerUser = (req, res) => {
    const { name, phone, cpf, email, password } = req.body;
    
    db.query('SELECT * FROM farmer WHERE email = ?', [email], (err, result) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            return res.status(500).send({ success: false, message: 'Erro interno' });
        }

        if (result.length > 0) {
            return res.json({ success: false, message: 'Este e-mail já está cadastrado na plataforma!' });
        } else {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                    console.error('Erro ao criptografar senha:', err);
                    return res.status(500).json({ success: false, message: 'Erro ao registrar o usuário' });
                }
                
                db.query(
                    'INSERT INTO farmer (name, phone, cpf, email, password) VALUES (?, ?, ?, ?, ?)',
                    [name, phone, cpf, email, hash],
                    (err, result) => {
                        if (err) {
                            console.error('Erro ao inserir usuário:', err);
                            return res.status(500).send({ success: false, message: 'Erro ao registrar o usuário' });
                        }

                        // Gera o token após o registro bem-sucedido
                        const token = jwt.sign(
                            { id: result.insertId, userType: 'farmer' }, // Use o `insertId` do novo usuário
                            secret,
                            { expiresIn: '1h' }
                        );

                        res.json({ 
                            success: true, 
                            message: 'Usuário registrado com sucesso!',
                            token, // Envia o token ao cliente
                            userType: 'farmer', // Define o tipo de usuário como 'farmer' 
                            name: name // Envia o nome do usuário
                        });
                    }
                );
            });
        }
    });
};

// Função para autenticar e logar o usuário
const loginUser = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM farmer WHERE email = ?', [email], (err, result) => {
        if (err) {
            console.error('Erro ao buscar usuário:', err);
            return res.status(500).send({ success: false, message: 'Erro interno' });
        }

        if (result.length > 0) {
            const user = result[0];
            bcrypt.compare(password, user.password, (err, match) => {
                if (err) {
                    console.error('Erro ao comparar senha:', err);
                    return res.status(500).json({ success: false, message: 'Erro ao autenticar' });
                }

                if (match) {
                    // Se a senha estiver correta, gera um token JWT
                    const token = jwt.sign(
                        { id: user.id, userType: user.userType },
                        secret, // segredo
                        { expiresIn: '1h' } // o token expira em 1 hora
                    );

                    res.json({ 
                        success: true, 
                        message: 'Login bem-sucedido!',
                        token, // Envia o token ao cliente
                        userType: user.userType,
                        name: user.name // Envia o nome do usuário
                    });
                } else {
                    res.json({ success: false, message: 'Senha incorreta!' });
                }
            });
        } else {
            res.json({ success: false, message: 'Email não encontrado!' });
        }
    });
};

module.exports = { registerUser, loginUser };