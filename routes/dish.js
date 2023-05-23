const express = require("express");

const router = express.Router();
const { dishes: controllers } = require("../controllers");

router.get("/", controllers.getAllDishes);
router.get("/:id", controllers.getDishesByShopId);

module.exports = router;
