const { Dish } = require("../../models");
const { HttpError } = require("../../helpers");

const getAllDishes = async (req, res) => {
	const result = await Dish.find();

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

module.exports = getAllDishes;
