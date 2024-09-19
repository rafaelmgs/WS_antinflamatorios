const mongoose = require('mongoose');

function connection() {
    let usuario = process.env.NODE_USER
    let senha = process.env.NODE_PASS

    if (process.env.NODE_ENV !== 'producao') {
        require('dotenv').config();
        usuario = process.env.NODE_USER
        senha = process.env.NODE_PASS
    } else {
        usuario = process.env.NODE_USER
        senha = process.env.NODE_PASS
    }

    const url = 'mongodb+srv://admin:456123@cluster0.v2rjt.mongodb.net/antiinflamatorios?retryWrites=true&w=majority';

    mongoose.connect(url);

    const db = mongoose.connection;

    db.on('error', () => {
        console.error('ERRO AO CONECTAR!');
    });

    db.on('open', () => {
        console.error('CONEXÃO COM SUCESSO!');
    });

};
//connection();
module.exports = connection;