const { ShopService } = require("../../services");

const getShopById = async (req, res) => {
	const { id } = req.params;
	const shop = await ShopService.shopById(id);
	res.json({
		code: 200,
		status: "Success",
		data: {
			shop: shop,
		},
	});
};

module.exports = getShopById;
