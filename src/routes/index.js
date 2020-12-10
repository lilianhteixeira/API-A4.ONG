const express = require("express");
const router = express.Router();

router.get("/", function(request, response){
    response.status(200).send({
        titulo: "API A4.ONG",
        description: "Bem vindo à API A4, aqui você encontra informações sobre os animais do abrigo, os animais desaparecidos e sobre os nossos colaboradores.",
        version: "1.0.0"
    });
});

module.exports = router;