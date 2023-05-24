const { ctrlWrapper } = require("../../helpers");
const getShopById = require("./getShopById");
const getAllShops = require("./getAllShops");

module.exports = {
	getShopById: ctrlWrapper(getShopById),
	getAllShops: ctrlWrapper(getAllShops),
};
