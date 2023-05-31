const { AuthService } = require("../../services");

const getCurrentUser = async (req, res) => {
	const { _id: userId } = req.user;

	const currentUser = await AuthService.findUserById(userId);

	res.json({
		code: 200,
		status: "Success",
		data: { user: currentUser },
	});
};

module.exports = getCurrentUser;
