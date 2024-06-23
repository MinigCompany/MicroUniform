const express = require('express');
const dbConnection = require('../database/Config');
const RecordController = require("../controllers/RecordController");

const router = express.Router();

router.get("/",RecordController.Historial);
router.get("/AllEntradas/:historial_ID",RecordController.allInputs);
router.post("/AllSalidas/:historial_ID",RecordController.allOutputs)

module.exports = router;