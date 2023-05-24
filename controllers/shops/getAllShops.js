const { Shop } = require("../../models");
const { HttpError } = require("../../helpers");

const getAllShops = async (req, res) => {
	const result = await Shop.find();

	if (!result) {
		throw HttpError(404, "Not found");
	}

	res.json({
		status: "success",
		code: 200,
		data: {
			result,
		},
	});
};

module.exports = getAllShops;
