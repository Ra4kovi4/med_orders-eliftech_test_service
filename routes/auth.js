const express = require("express");
const router = express.Router();

const { userLoginSchema, registerSchema } = require("../models");
const { authenticate, validateBody } = require("../middlewars");

const { auth: controllers } = require("../controllers");

router.post("/signup", validateBody(registerSchema), controllers.registerUser);

router.post("/login", validateBody(userLoginSchema), controllers.loginUser);

router.get("/current", authenticate, controllers.getCurrentUser);

router.post("/logout", authenticate, controllers.logoutUser);

module.exports = router;
