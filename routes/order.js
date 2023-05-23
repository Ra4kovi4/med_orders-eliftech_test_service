const express = require("express");

const router = express.Router();
const { order: controllers } = require("../controllers");

router.post("/", controllers.addOrder);
router.get("/", controllers.getAllUserOrders);

module.exports = router;
