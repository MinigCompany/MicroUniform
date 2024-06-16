const express = require('express');
const dbConnection = require('../database/Config');
const CategoryController = require("../controllers/CategoryController");

const router = express.Router();

router.get("/Categorias/",CategoryController.caregories)
router.post("/AddCategory",CategoryController.addCategory)
router.get("/Category/:id",CategoryController.categoryID)


module.exports = router;