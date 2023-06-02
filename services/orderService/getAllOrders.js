const { Order } = require("../../models");
const { HttpError } = require("../../helpers");

const getAllOrders = async (data) => {
	const { query } = data;
	const orders = await Order.findOne({
		$or: [
			{
				email: query,
			},
			{
				phone: query,
			},
		],
	});
	if (!orders) {
		throw HttpError(404, "Not Found");
	}
	return orders;
};

module.exports = { getAllOrders };
