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
		cart: [
			{
				list: [
					{
						imageUrl: {
							type: String,
							required: true,
						},
						title: {
							type: String,
							required: true,
							minlength: 2,
						},
						price: {
							type: Number,
							required: true,
							min: 0.01,
						},
						quantity: {
							type: Number,
							required: true,
							default: 1,
						},
					},
				],
				totalPrice: {
					type: String,
					required: true,
				},
			},
		],
	},
	{ versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const Order = model("Order", orderSchema);

const orderCartItemSchema = Joi.object({
	imageUrl: Joi.string().required(),
	title: Joi.string().required().min(2),
	price: Joi.number().required().min(0.01),
	quantity: Joi.number().required().default(1),
});

const orderCartSchema = Joi.object({
	list: Joi.array().items(orderCartItemSchema),
	totalPrice: Joi.string().required(),
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
