const { Order } = require("../../models");
const { HttpError } = require("../../helpers");

const getAllOrders = async (data) => {
	const { email, phone } = data;

	const orders = await Order.findOne({
		$or: [
			{
				email: email,
			},
			{
				phone: phone,
			},
		],
	});

	if (!orders) {
		throw HttpError(404, "Not Found");
	}
	return orders;
};

module.exports = { getAllOrders };
