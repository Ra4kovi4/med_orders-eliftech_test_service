const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const dishSchema = new Schema({
	imgUrl: {
		type: String,
	},
	title: {
		type: String,
		required: true,
		minlength: 2,
	},
	description: {
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
});

const shopSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	dishes: [dishSchema],
});

shopSchema.post("save", handleMongooseError);

const Shop = model("Shop", shopSchema);

module.exports = Shop;
