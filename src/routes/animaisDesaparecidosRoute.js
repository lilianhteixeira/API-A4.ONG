const express = require("express");
const router = express.Router();
const controller = require("../controllers/animaisDesaparecidosController");

router.get("/", controller.getAllDesaparecidos);
router.get("/nome/:nome", controller.getByNome); //get params pq já informa qual o parametro que vamos receber
router.post("/criar", controller.addDesaparecido);
router.patch("/atualizar/:nome", controller.updateByNome);
router.delete("/delete/:nome", controller.deleteDesaparecidoByNome);

module.exports = router;