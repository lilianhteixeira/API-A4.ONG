const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doadoresSchema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    valorDoacao: {
        type: String,
        required: false
    },
    formaPagamento: {
        type: String,
        required: true
    },
    observacao: {
        type: String,
        required: false
    }
});

const doadoresCollections = mongoose.model("doadores", doadoresSchema);

module.exports = doadoresCollections;