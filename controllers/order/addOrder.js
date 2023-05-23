const { HttpError } = require("../../helpers");
const { Order, Dish } = require("../../models");

const addOrder = async (req, res) => {
	const { _id: userId } = req.user;

	const { id } = req.params;
	console.log(id);
	const { name, email, phone, address, cart } = req.body;
	const dish = await Dish.findById(id);

	let order = await Order.findOne({ owner: userId });

	if (!order) {
		console.log("order null if сработал");
		order = Order.create({
			name,
			email,
			phone,
			address,
			cart: {
				list: [
					{
						dishId: dish._id,
						quantity: 1,
					},
				],
				totalPrice: dish.price,
			},
			owner: userId,
		});
	} else {
		order.cart.list.push({
			dishId: dish._id,
			quantity: 1,
		});

		order.cart.totalPrice += dish.price;
	}

	await order.save();

	res.json({
		code: 200,
		status: "Success",
		data: {
			order,
		},
	});
};

module.exports = addOrder;
