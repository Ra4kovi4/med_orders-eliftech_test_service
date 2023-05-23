const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const dishSchema = new Schema(
	{
		imgUrl: {
			type: String,
		},

		title: {
			type: String,
			required: true,
			minlength: 2,
		},

		descr: {
			type: String,
			minlength: 2,
			maxlength: 50,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0.01,
		},
		shopId: {
			type: Number,
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
);

const Dish = model("Dish", dishSchema);

module.exports = Dish;
