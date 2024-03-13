const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const medSchema = new Schema({
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
});

const pharmSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	medicate: [ medSchema ],
	position: {
        lat: { type: Number, required: true }, 
        lng: { type: Number, required: true }
    }
});

pharmSchema.post("save", handleMongooseError);

const Pharm = model("Pharm", pharmSchema);

module.exports = Pharm;
