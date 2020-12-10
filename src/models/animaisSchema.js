const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animaisSchema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    raca: {
        type: String,
        required: true
    },
    peso: {
        type: String,
        required: true
    },
    dataAbrigo: {
        type: Date,
        required: false
    },
    aptoAdocao: {
        type: String,
        required: true
    },
    medicacao: {
        type: String,
        required: false
    },
    especie: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: false
    }
});

const animaisCollections = mongoose.model("abrigo", animaisSchema);

module.exports = animaisCollections;