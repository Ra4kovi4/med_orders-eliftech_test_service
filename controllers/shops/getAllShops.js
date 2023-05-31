const { ShopService } = require("../../services");

const getAllShops = async (req, res) => {
	const result = await ShopService.allShops();
	res.json({
		status: "success",
		code: 200,
		data: {
			result,
		},
	});
};

module.exports = getAllShops;
