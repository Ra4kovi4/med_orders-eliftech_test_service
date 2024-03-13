const { OrderService } = require("../../services");

const addOrder = async (req, res) => {
	const { name, email, phone, address, medicates, totalPrice } = req.body;

	let user = await OrderService.findOrder(email);

	if (!user) {
		user = await OrderService.createOrder(
			name,
			email,
			phone,
			address,
			medicates,
			totalPrice
		);
	} else {
		user.cart.push({ list: [...medicates], totalPrice });
	}
	await user.save();

	res.json({
		code: 200,
		status: "Success",
		data: user,
	});
};

module.exports = addOrder;
