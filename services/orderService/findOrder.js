const { Order } = require("../../models");

const findOrder = async (email) => {
	const user = await Order.findOne({ email });
	return user;
};
module.exports = { findOrder };
