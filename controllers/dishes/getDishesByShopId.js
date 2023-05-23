// const { Dish, Shop } = require("../../models");
// const { HttpError } = require("../../helpers");

// const getDishesByShopId = async (req, res) => {
// 	const { id } = req.params;
// 	console.log(id);
// 	const shop = await Shop.findById(id);

// 	if (!shop) {
// 		throw HttpError(404, "Shop not found");
// 	}

// 	const result = await Dish.find({ shopId: shop._id });

// 	if (!result) {
// 		throw HttpError(404, "Not found");
// 	}
// 	res.json({
// 		status: "success",
// 		code: 200,
// 		data: {
// 			result,
// 		},
// 	});
// };

const { Dish } = require("../../models");

const getDishesByShopId = async (req, res) => {
	const { id } = req.params;
	console.log(typeof id);
	const dishes = await Dish.aggregate([
		{
			$match: {
				shopId: Number(id),
			},
		},
	]);
	res.json({
		code: 200,
		status: "Success",
		data: {
			dishes: dishes,
		},
	});
};

module.exports = getDishesByShopId;
