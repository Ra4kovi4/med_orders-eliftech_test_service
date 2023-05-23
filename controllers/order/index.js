const { ctrlWrapper } = require("../../helpers");
const addOrder = require("./addOrder");
const getAllUserOrders = require("./getAllUserOrders");

module.exports = {
	addOrder: ctrlWrapper(addOrder),
	getAllUserOrders: ctrlWrapper(getAllUserOrders),
};
