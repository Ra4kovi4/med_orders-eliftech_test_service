const express = require("express");

const router = express.Router();
const { order: controllers } = require("../controllers");
const { authenticate, validateBody } = require("../middlewars");
router.post("/", controllers.addOrder);
router.get("/", controllers.getAllUserOrders);

module.exports = router;
