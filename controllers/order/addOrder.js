const { HttpError } = require("../../helpers");
const { Order, Shop } = require("../../models");

const addOrder = async (req, res) => {
	const { id: dishId } = req.params;
	const { name, email, phone, address, dishes, totalPrice } = req.body;
	const shop = await Shop.findOne({});
	let oneDish;
	for (const dish of dishes) {
		if (dish._id === dishId) {
			oneDish = dish;
			break;
		}
	}

	if (!dish) {
		throw new HttpError(404, "Dish not found");
	}

	let order = await Order.findOne({ owner: email });

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
					},
				],
				totalPrice,
			},
			owner: email,
		});
	} else {
		order.cart.list.push({
			dish: oneDish,
			quantity: 1,
		});
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
