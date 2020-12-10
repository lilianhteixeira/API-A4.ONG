const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();

/**
 * * Carregar variaveis do arquivo .env file, onde chaves de API e senhas são configuradas
*/
dotenv.config();

const PORT = process.env.PORT;

const index = require("../servidor/src/routes/index");
const animais = require("../servidor/src/routes/animaisRoute");
const desaparecidos = require("../servidor/src/routes/animaisDesaparecidosRoute");
const doadores = require("../servidor/src/routes/doadoresRoute");

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", index);
app.use("/animais", animais);
app.use("/desaparecidos", desaparecidos);
app.use("/doadores", doadores);

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Server Error')
});


app.listen(PORT, () => {
    console.log(`Nosso app está rodando na porta ${PORT}`);
});

module.exports = app;