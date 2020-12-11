const express = require("express");
const router = express.Router();
const controller = require("../controllers/doadoresController");

router.get("/", controller.getAllDoadores);
router.get("/nome/:nome", controller.getByNome); 
router.post("/criar", controller.addDoador);
router.patch("/atualizar/:nome", controller.updateByNome);
router.delete("/delete/:nome", controller.deleteDoadorByNome);

module.exports = router;