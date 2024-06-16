const express = require('express');
const dbConnection = require('../database/Config');
const UniformController = require("../controllers/UniformController");

const router = express.Router();

router.get("/Uniformes/",UniformController.uniforms);
router.get("/UniformeCategoria/:categoria",UniformController.uniformsCategoria);
router.post("/AddUniforme",UniformController.addUniform);
router.put("/UpdateUniforme",UniformController.updateUniform);
router.post("/AddSalida",UniformController.addUniformSalida);
router.delete("/DeleteUniforme/:id",UniformController.destroyUniform);
router.get("/AllEntradas/:uniforme_ID",UniformController.allInputs);
router.post("/AllSalidas/:uniforme_ID",UniformController.allOutputs);

module.exports = router;