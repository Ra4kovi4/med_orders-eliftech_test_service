const { Order } = require("../../models");

const createOrder = async (name, email, phone, address, medicate, totalPrice) => {
	const user = await Order.create({
		name,
		email,
		phone,
		address,
		cart: [{ list: [...medicate], totalPrice }],
	});
	return user;
};
module.exports = { createOrder };
