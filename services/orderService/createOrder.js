const { Order } = require("../../models");

const createOrder = async (name, email, phone, address, dishes, totalPrice) => {
	const user = await Order.create({
		name,
		email,
		phone,
		address,
		cart: [{ list: [...dishes], totalPrice }],
	});
	return user;
};
module.exports = { createOrder };
