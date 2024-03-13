const express = require("express");

const router = express.Router();

const { pharm: controllers } = require("../controllers");

router.get("/", controllers.getAllPharm);
router.get("/:id", controllers.getPharmById);

module.exports = router;
