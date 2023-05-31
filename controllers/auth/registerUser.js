const { AuthService } = require("../../services");

const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
	const { name, email, password } = req.body;

	const normalizedEmail = email.toLowerCase();

	const user = await AuthService.findUserByEmail(normalizedEmail);

	const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

	const newUser = await AuthService.createUser(
		name,
		normalizedEmail,
		hashPassword
	);

	res.status(201).json({
		code: 201,
		message: "success",
		data: { user: { name: newUser.name, email: newUser.email } },
	});
};

module.exports = registerUser;
