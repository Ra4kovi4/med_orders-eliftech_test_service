const { User, userLoginSchema, registerSchema } = require("./user");
const Dish = require("./dish");
const Shop = require("./shop");
const { Order, addOrderSchema } = require("./order");

module.exports = {
	User,
	Dish,
	Shop,
	Order,
	userLoginSchema,
	registerSchema,
	addOrderSchema,
};
