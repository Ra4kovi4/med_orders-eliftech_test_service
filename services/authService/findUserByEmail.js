const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const findUserByEmail = async (email) => {
	const user = await User.findOne({ email: email });
	if (user) {
		throw HttpError(409, "Email already in use");
	}
	return user;
};

module.exports = { findUserByEmail };
