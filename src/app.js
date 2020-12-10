const express = require("express");
const app = express();
const cors = require("cors");

const db = require("../server");
db.connect();

app.use(cors());
app.use(express.json());

const index = require("./routes/index");
const animais = require("./routes/animaisRoute");
const desaparecidos = require("./routes/animaisDesaparecidosRoute");
const doadores = require("./routes/doadoresRoute");

app.use("/", index);
app.use("/animais", animais);
app.use("/desaparecidos", desaparecidos);
app.use("/doadores", doadores);

module.exports = app;