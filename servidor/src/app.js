const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./models/repository");
db.connect();

app.use(cors());
app.use(express.json());

const index = require("./routes/index");
const animais = require("./routes/animaisRoute");
const desaparecidos = require("./routes/animaisDesaparecidosRoute");

app.use("/", index);
app.use("/animais", animais);
app.use("/desaparecidos", desaparecidos);

module.exports = app;