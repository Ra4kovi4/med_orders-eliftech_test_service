const { mongoose } = require("mongoose");
const { Order } = require("../../models");

const getAllUserOrders = async (req, res) => {
	const { email } = req.body;

	const orders = await Order.findOne({ email });

	const [order] = orders;

	res.json({
		code: 200,
		status: "Success",
		data: {
			result: order.cart,
		},
	});
};

module.exports = getAllUserOrders;
