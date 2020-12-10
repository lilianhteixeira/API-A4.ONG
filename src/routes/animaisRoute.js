const express = require("express");
const router = express.Router();
const controller = require("../controllers/animaisController");

router.get("/", controller.getAllAbrigo);
router.get("/nome/:nome", controller.getByNome); //get params pq já informa qual o parametro que vamos receber
router.post("/criar", controller.addAbrigo);
router.patch("/atualizar/:nome", controller.updateAdocaoByNome);
router.patch("/atualizar/:id", controller.updateAdocaoById);
router.delete("/delete/:nome", controller.deleteAbrigoByNome);

module.exports = router;