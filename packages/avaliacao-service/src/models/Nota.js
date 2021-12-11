const mongoose = require('mongoose');

const schema = mongoose.Schema({
    filmeId: mongoose.Schema.Types.ObjectId,
    valor: Number
});

module.exports = mongoose.model("Nota", schema);