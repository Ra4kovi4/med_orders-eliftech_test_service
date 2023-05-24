const express = require("express");

const router = express.Router();

const { shops: controllers } = require("../controllers");

router.get("/", controllers.getAllShops);
router.get("/:id", controllers.getShopById);

module.exports = router;
