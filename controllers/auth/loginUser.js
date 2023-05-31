const { AuthService } = require("../../services");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { HttpError } = require("../../helpers");
const { SECRET_KEY } = process.env;

const loginUser = async (req, res) => {
	const { email, password } = req.body;

	const normalizedEmail = email.toLowerCase();

	const user = await AuthService.findUserByEmail(normalizedEmail);

	const passwordCompare = await bcrypt.compare(password, user.password);

	if (!passwordCompare) {
		throw HttpError(401, "Email or password invalid");
	}

	const payload = {
		id: user.id,
	};

	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

	await AuthService.userUpdateById(user._id);

	res.json({
		code: 200,
		status: "Success",
		data: {
			user: {
				_id: user._id,
				name: user.name,
				email: user.email,
				token,
			},
		},
	});
};

module.exports = loginUser;
