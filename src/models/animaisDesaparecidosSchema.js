const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animaisDesaparecidosSchema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    raca: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    telefoneResponsavel: {
        type: String,
        required: true
    }
});

const desaparecidosCollections = mongoose.model("desaparecidos", animaisDesaparecidosSchema);

module.exports = desaparecidosCollections;