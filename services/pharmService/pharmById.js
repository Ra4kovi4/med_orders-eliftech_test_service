const { Pharm } = require("../../models");
const { HttpError } = require("../../helpers");

const pharmById = async (id) => {
	const pharm = await Pharm.findById(id);
	if (!pharm) {
		throw HttpError(404, "Not Found");
	}
	return pharm;
};

module.exports = { pharmById };
