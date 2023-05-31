const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const findUserById = async (id) => {
	const currentUser = await User.findById(id, {
		_id: 1,
		name: 1,
		email: 1,
		token: 1,
	});

	if (!currentUser) {
		throw HttpError(400, "User not found");
	}
	return currentUser;
};

module.exports = { findUserById };
