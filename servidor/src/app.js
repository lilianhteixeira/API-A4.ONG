const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const index = require("./routes/index");
const animais = require("./routes/animaisRoute");

app.use("/", index);
//app.use("/animais", animais);

module.exports = app;