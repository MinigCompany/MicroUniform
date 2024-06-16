const express = require('express');
const dbConnection = require('../database/Config');
const UdmController = require("../controllers/UDMController");

const router = express.Router();

router.get("/Unidades/",UdmController.udms)
router.post("/AddUnidad",UdmController.addUdm)
router.get("/Unidad/:id",UdmController.UdmID)


module.exports = router;