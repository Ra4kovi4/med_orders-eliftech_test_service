const { HttpError } = require("../../helpers");
const { Order, Shop } = require("../../models");

const addOrder = async (req, res) => {
	const { _id: userId } = req.user;

	const { id: dishId } = req.params;

	const { name, email, phone, address } = req.body;
	const shop = await Shop.findOne({});
	let oneDish;
	for (const dish of shop.dishes) {
		if (dish._id === dishId) {
			oneDish = dish;
			break;
		}
	}

	if (!dish) {
		throw new HttpError(404, "Dish not found");
	}

	let order = await Order.findOne({ owner: userId });

	if (!order) {
		order = Order.create({
			name,
			email,
			phone,
			address,
			cart: {
				list: [
					{
						dish: oneDish,
						quantity: 1,
					},
				],
				totalPrice: dish.price,
			},
			owner: userId,
		});
	} else {
		order.cart.list.push({
			dish: oneDish,
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
