const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/a4ong";
const dotenv = require("dotenv");

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true});
    const connection = mongoose.connection;

    connection.on('error', () => console.error("Erro ao se conectar ao Mongo."));
    connection.once('open', () => console.log("Conectamos ao Mongo."));
}

dotenv.config();

module.exports = { connect }