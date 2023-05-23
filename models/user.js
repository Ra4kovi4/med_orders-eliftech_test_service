const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const emailRegexp =
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new Schema(
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
		password: {
			type: String,
			minlength: 6,
			required: [true, "Password is required"],
		},
		token: {
			type: String,
			default: null,
		},
	},
	{ versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("User", userSchema);

const registerSchema = Joi.object({
	name: Joi.string().min(1).max(20).required(),
	password: Joi.string().min(6).required(),
	email: Joi.string().pattern(emailRegexp).required(),
});
const userLoginSchema = Joi.object({
	password: Joi.string().min(6).required(),
	email: Joi.string().pattern(emailRegexp).required(),
});

module.exports = {
	User,
	userLoginSchema,
	registerSchema,
};
