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
				from: "dish", // Название коллекции с данными о блюдах
				localField: "cart.dishId",
				foreignField: "_id",
				as: "dishes",
			},
		},
		{
			$set: {
				cart: {
					$map: {
						input: "$dish",
						in: {
							$mergeObjects: [
								"$$this",
								{
									$arrayElemAt: [
										"$dish",
										{
											$indexOfArray: ["$dish._id", "$$this.dishId"],
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

	const [dishes] = result;

	res.json({
		code: 200,
		status: "Success",
		data: {
			result: dishes.cart,
		},
	});
};

module.exports = getAllUserOrders;
