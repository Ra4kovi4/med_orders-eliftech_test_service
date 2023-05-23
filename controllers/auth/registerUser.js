const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;
	console.log(req.body);
	const normalizedEmail = email.toLowerCase();

	const user = await User.findOne({ email: normalizedEmail });
	if (user) {
		throw HttpError(409, "Email already in use");
	}

	const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

	const newUser = await User.create({
		name,
		email: normalizedEmail,
		password: hashPassword,
	});

	if (!newUser) {
		throw HttpError(400, "Unable to save on database");
	}

	res.status(201).json({
		code: 201,
		message: "success",
		data: { user: { name: newUser.name, email: newUser.email } },
	});
};

module.exports = registerUser;
