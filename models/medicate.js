const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const medicateSchema = new Schema(
	{
		imgUrl: {
			type: String,
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
		pharmId: { type: Number, required: true },
	},
	{ versionKey: false, timestamps: true }
);
medicateSchema.post("save", handleMongooseError);
const Medicate = model("Dish", medicateSchema);

module.exports = Medicate;
