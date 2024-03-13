const { User, userLoginSchema, registerSchema } = require("./user");
const Medicate = require("./medicate");
const Pharm = require("./pharm");
const { Order, addOrderSchema } = require("./order");

module.exports = {
	User,
	Medicate,
	Pharm,
	Order,
	userLoginSchema,
	registerSchema,
	addOrderSchema,
};
