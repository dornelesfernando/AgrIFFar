const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: '',
});

// Iniciar server: node server.js

// Inicia o servidor na porta 5000
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});