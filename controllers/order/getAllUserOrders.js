const { OrderService } = require("../../services");

const getAllUserOrders = async (req, res) => {
	const orders = await OrderService.getAllOrders(req.body);

	res.json({
		code: 200,
		status: "Success",
		data: {
			result: orders,
		},
	});
};

module.exports = getAllUserOrders;
