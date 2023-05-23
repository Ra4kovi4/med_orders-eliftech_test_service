const { ctrlWrapper } = require("../../helpers");
const getDishesByShopId = require("./getDishesByShopId");
const getAllDishes = require("./getAllDishes");
module.exports = {
	getDishesByShopId: ctrlWrapper(getDishesByShopId),
	getAllDishes: ctrlWrapper(getAllDishes),
};
