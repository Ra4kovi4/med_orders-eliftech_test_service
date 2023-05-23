const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const getCurrentUser = async (req, res) => {
	const { _id: userId } = req.user;

	const currentUser = await User.findById(userId, {
		_id: 1,
		name: 1,
		email: 1,
		token: 1,
		cart: 1,
	});

	if (!currentUser) {
		throw HttpError(400, "User not found");
	}

	res.json({
		code: 200,
		status: "Success",
		data: { user: currentUser },
	});
};

module.exports = getCurrentUser;
