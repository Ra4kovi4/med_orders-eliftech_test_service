const { AuthService } = require("../../services");
const logoutUser = async (req, res) => {
	const { _id } = req.user;

	await AuthService.userUpdateById(_id);

	res.json({
		code: 200,
		status: "Success",
		message: "Success logout",
	});
};

module.exports = logoutUser;
