const { HttpError } = require("../../helpers");
const { Order } = require("../../models");

const addOrder = async (req, res) => {
	const { name, email, phone, address, dishes, totalPrice } = req.body;

	const order = await Order.create({
		name,
		email,
		phone,
		address,
		cart: {
			list: dishes,
			totalPrice,
		},
	});

	res.json({
		code: 200,
		status: "Success",
		data: {
			order,
		},
	});
};

module.exports = addOrder;
