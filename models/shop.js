const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const shopSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minlength: 2,
		},

		shopId: {
			type: Number,
			required: true,
		},
	},

	{ versionKey: false, timestamps: true }
);
shopSchema.post("save", handleMongooseError);

const Shop = model("Shop", shopSchema);

module.exports = Shop;
