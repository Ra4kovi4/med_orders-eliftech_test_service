const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const createUser = async (name, email, password) => {
	const newUser = await User.create({
		name,
		email,
		password,
	});

	if (!newUser) {
		throw HttpError(400, "Unable to save on database");
	}
	return newUser;
};

module.exports = { createUser };
