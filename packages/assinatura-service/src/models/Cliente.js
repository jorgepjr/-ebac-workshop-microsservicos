const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    cpf: String,
    registro: Date
});

module.exports = mongoose.model("Cliente", schema)