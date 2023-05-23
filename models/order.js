const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const emailRegexp =
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegExp =
	/^\+?.\(?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const orderSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			match: emailRegexp,
			required: [true, "db: Email is required"],
			unique: true,
		},

		address: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			match: phoneRegExp,
			required: [true, "db: Phone is required"],
		},
		cart: {
			list: [
				{
					dishId: {
						type: Schema.Types.ObjectId,
						ref: "dish",
						required: true,
					},
					quantity: {
						type: Number,
						required: true,
						default: 1,
					},
				},
			],
			totalPrice: {
				type: Number,
				required: true,
			},
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("Order", orderSchema);

const cartItemSchema = Joi.object({
	dishId: Joi.string().required(),
	quantity: Joi.number().integer().min(1).default(1),
});

const cartSchema = Joi.object({
	items: Joi.array().items(cartItemSchema).required(),
	totalPrice: Joi.number().required(),
});

const orderCartSchema = Joi.object({
	cart: cartSchema.required(),
	owner: Joi.string().required(),
});

const addOrderSchema = Joi.object({
	name: Joi.string().min(1).max(20).required(),
	phone: Joi.string().pattern(phoneRegExp).required(),
	email: Joi.string().pattern(emailRegexp).required(),
	address: Joi.string().required(),
	cart: orderCartSchema.required(),
});

module.exports = {
	Order,
	addOrderSchema,
};
