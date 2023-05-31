const { Shop } = require("../../models");
const { HttpError } = require("../../helpers");

const shopById = async (id) => {
	const shop = await Shop.findById(id);
	if (!shop) {
		throw HttpError(404, "Not Found");
	}
	return shop;
};

module.exports = { shopById };
