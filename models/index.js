const { User, userLoginSchema, registerSchema } = require("./user");
const Dish = require("./dish");
const Shop = require("./shops");
const { Order, addOrderSchema } = require("./order");

module.exports = {
	User,
	Dish,
	Shop,
	userLoginSchema,
	registerSchema,
	addOrderSchema,
};
