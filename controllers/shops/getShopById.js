const { HttpError } = require("../../helpers");
const { Shop } = require("../../models");

const getShopById = async (req, res) => {
	const { id } = req.params;

	const shop = await Shop.findById(id);
	if (!shop) {
		throw HttpError(404, "Not Found");
	}
	res.json({
		code: 200,
		status: "Success",
		data: {
			shop: shop,
		},
	});
};

module.exports = getShopById;
