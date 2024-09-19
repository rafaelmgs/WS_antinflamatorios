const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    quando:String,
    farmacia:String,
    nome:String,
    precovelho:String,          // Informação adicional para alguns casos
    preconovo:String,
    precoregular:String,        // Informação adicional para alguns casos
    urlproduto:String
});

const antiinflamatorios = mongoose.model('antiinflamatorios', schema);

module.exports = antiinflamatorios;