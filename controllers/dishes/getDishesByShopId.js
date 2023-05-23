const { Dish } = require("../../models");
const { HttpError } = require("../../helpers");

const getDishesByShopId = async (req, res) => {
	const { id } = req.params;
	console.log(id);
	const result = await Dish.find({ shopId: id });

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

module.exports = getDishesByShopId;
