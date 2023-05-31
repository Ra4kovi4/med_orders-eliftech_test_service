const { Shop } = require("../../models");
const { HttpError } = require("../../helpers");

const allShops = async () => {
	const result = await Shop.find();

	if (!result) {
		throw HttpError(404, "Not found");
	}
	return result;
};

module.exports = { allShops };
