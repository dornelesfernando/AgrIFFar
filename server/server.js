const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');

app.use(express.json());

app.use(cors());

app.use('/auth', authRoutes); // Importante que o cookieParser venha antes


// Inicia o servidor na porta 5000
app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});