const { mongoose } = require("mongoose");
const { Order } = require("../../models");

const getAllUserOrders = async (req, res) => {
	const { email } = req.body;

	const orders = await Order.aggregate([
		{
			$match: {
				email: email,
			},
		},
		{
			$lookup: {
				from: "dish",
				localField: "cart.list.dishId",
				foreignField: "_id",
				as: "dishes",
			},
		},
		{
			$set: {
				cart: {
					$map: {
						input: "$cart.list",
						in: {
							$mergeObjects: [
								"$$this",
								{
									$arrayElemAt: [
										"$dishes",
										{
											$indexOfArray: ["$dishes._id", "$$this.dishId"],
										},
									],
								},
							],
						},
					},
				},
			},
		},
	]);

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
