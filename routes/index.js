const express = require("express");
const router = express.Router();
const { homepage, categories } = require("../controllers/index.js");

router.get("/", homepage);
router.get("/categories", categories);

module.exports = router;