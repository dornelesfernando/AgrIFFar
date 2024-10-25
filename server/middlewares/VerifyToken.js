const jwt = require('jsonwebtoken');
const secret = 'seuSegredoJWT'; // Mesmo segredo usado para gerar o token

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ success: false, message: 'Nenhum token fornecido' });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Falha ao autenticar o token' });
        }

        req.userId = decoded.id;
        req.userType = decoded.userType;
        next(); // Avança para a próxima função/middleware
    });
};

module.exports = verifyToken;