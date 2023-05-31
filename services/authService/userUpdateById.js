const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const userUpdateById = async (id) => {
	await User.findByIdAndUpdate(id, { token });
};

module.exports = { userUpdateById };
