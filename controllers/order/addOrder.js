const { OrderService } = require("../../services");

const addOrder = async (req, res) => {
	const { name, email, phone, address, dishes, totalPrice } = req.body;
	let user = await OrderService.findOrder(email);

	if (!user) {
		user = await OrderService.createOrder(
			name,
			email,
			phone,
			address,
			dishes,
			totalPrice
		);
	} else {
		user.cart.push({ list: [...dishes], totalPrice });
	}
	await user.save();

	res.json({
		code: 200,
		status: "Success",
		data: user,
	});
};

module.exports = addOrder;
